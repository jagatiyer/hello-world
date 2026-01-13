from decimal import Decimal

from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.urls import reverse
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string

from .models import (
    ShopItem,
    ShopCategory,
    Cart,
    CartItem,
    ExperienceBooking,
    ProductUnit,
)
from .forms import ExperienceBookingForm
from .cart_utils import (
    add_to_session_cart,
    remove_from_session_cart,
    session_cart_to_items,
    get_session_cart,
)


def _is_ajax_request(request):
    return (
        request.headers.get("x-requested-with") == "XMLHttpRequest"
        or request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest"
    )


# ============================================================
# SHOP INDEX
# ============================================================

def shop_index(request):
    category_slug = request.GET.get("category")
    categories = ShopCategory.objects.all()

    items = ShopItem.objects.filter(published=True).select_related("category")
    if category_slug:
        items = items.filter(category__slug=category_slug)

    items = items.order_by("-created_at")

    return render(
        request,
        "shop/shop_index.html",
        {
            "categories": categories,
            "items": items,
            "items_count": items.count(),
            "active_category_slug": category_slug or "all",
        },
    )


# ============================================================
# PRODUCT DETAIL
# ============================================================

def product_detail(request, slug):
    item = get_object_or_404(ShopItem, slug=slug, published=True)

    # If this is an experience, provide the booking form
    booking_form = None
    if item.is_experience:
        booking_form = ExperienceBookingForm()

    return render(request, "shop/product_detail.html", {
        "item": item,
        "booking_form": booking_form,
    })


# ============================================================
# ADD TO CART
# ============================================================

@require_POST
def add_to_cart(request):
    product_id = request.POST.get("product_id")
    product_unit_id = request.POST.get("product_unit_id")
    qty_raw = request.POST.get("qty", 1)

    if not product_id:
        return HttpResponseBadRequest("Missing product_id")

    try:
        qty = int(qty_raw)
        if qty < 1:
            raise ValueError()
    except (ValueError, TypeError):
        return HttpResponseBadRequest("Invalid qty")

    product = get_object_or_404(ShopItem, id=product_id, published=True)

    product_unit = None
    if product_unit_id:
        try:
            product_unit = product.units.get(id=product_unit_id, is_active=True)
        except ProductUnit.DoesNotExist:
            return HttpResponseBadRequest("Invalid product_unit_id")

    if request.user.is_authenticated:
        cart, _ = Cart.objects.get_or_create(user=request.user)

        unit_price = (
            product_unit.price
            if product_unit
            else (product.price or Decimal("0.00"))
        )

        ci, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            product_unit=product_unit,
            defaults={
                "qty": qty,
                "unit_price": unit_price,
            },
        )

        if not created:
            ci.qty += qty
            ci.unit_price = unit_price
            ci.save()

        cart_count = cart.items_count()

    else:
        add_to_session_cart(
            request,
            product.id,
            qty,
            product_unit_id=product_unit_id,
        )
        session_cart = get_session_cart(request)
        cart_count = sum(int(v) for v in session_cart.values()) if session_cart else 0

    if _is_ajax_request(request):
        return JsonResponse(
            {"ok": True, "message": "Added to cart", "cart_count": cart_count}
        )

    messages.success(request, "Item added to cart successfully.")
    return redirect(
        request.POST.get("next")
        or request.META.get("HTTP_REFERER")
        or reverse("shop:shop_index")
    )


# ============================================================
# REMOVE CART ITEM
# ============================================================

@require_POST
def remove_cart_item(request):
    product_id = request.POST.get("product_id")
    product_unit_id = request.POST.get("product_unit_id")

    if not product_id:
        return HttpResponseBadRequest("Missing product_id")

    if request.user.is_authenticated:
        cart = getattr(request.user, "cart", None)
        if cart:
            CartItem.objects.filter(
                cart=cart,
                product_id=product_id,
                product_unit_id=product_unit_id,
            ).delete()
            cart_count = cart.items_count()
        else:
            cart_count = 0
    else:
        remove_from_session_cart(request, product_id, product_unit_id)
        session_cart = get_session_cart(request)
        cart_count = sum(int(v) for v in session_cart.values()) if session_cart else 0

    if _is_ajax_request(request):
        return JsonResponse({"ok": True, "cart_count": cart_count})

    return redirect("shop:cart_view")


# ============================================================
# CART PAGE
# ============================================================

def cart_view(request):
    items = []
    subtotal = Decimal("0.00")

    if request.user.is_authenticated:
        cart = getattr(request.user, "cart", None)
        if cart:
            for ci in cart.items.select_related("product", "product_unit"):
                line_total = ci.line_total()
                items.append(
                    {
                        "product": ci.product,
                        "product_unit": ci.product_unit,
                        "qty": ci.qty,
                        "unit_price": ci.unit_price,
                        "line_total": line_total,
                    }
                )
                subtotal += line_total
    else:
        for row in session_cart_to_items(request):
            items.append(row)
            subtotal += row["line_total"]

    gst = (subtotal * Decimal("0.18")).quantize(Decimal("0.01"))
    grand_total = subtotal + gst

    return render(
        request,
        "shop/cart.html",
        {
            "items": items,
            "subtotal": subtotal,
            "gst": gst,
            "grand_total": grand_total,
        },
    )


# ============================================================
# CHECKOUT
# ============================================================

@login_required(login_url="account_login")
def checkout_view(request):
    cart = getattr(request.user, "cart", None)
    if not cart or not cart.items.exists():
        return redirect("shop:shop_index")

    return render(
        request,
        "shop/checkout.html",
        {
            "cart": cart,
            "items": cart.items.select_related("product"),
            "subtotal": cart.subtotal(),
            "tax_total": cart.total_tax(),
            "total": cart.total(),
        },
    )


# ============================================================
# EXPERIENCE BOOKING
# ============================================================

@require_POST
def experience_booking_create(request):
    experience_id = request.POST.get("experience_id")

    if not experience_id:
        return HttpResponseBadRequest("Missing experience_id")

    experience = get_object_or_404(
        ShopItem, id=experience_id, is_experience=True
    )

    form = ExperienceBookingForm(request.POST)

    if form.is_valid():
        # Save to database
        booking = form.save(commit=False)
        booking.experience = experience
        booking.user = request.user if request.user.is_authenticated else None
        booking.status = ExperienceBooking.STATUS_PENDING
        booking.save()

        # Send email to admin
        try:
            admin_email = getattr(settings, 'CONTACT_EMAIL', settings.DEFAULT_FROM_EMAIL)
            subject = f'New Experience Booking: {booking.event_service_name}'

            # Format time slot for display
            time_display = dict(form.fields['time_slot'].choices).get(
                booking.time_slot, booking.time_slot
            )

            message = f"""
New Experience Booking Received

Experience: {experience.title}
Event/Service: {booking.event_service_name}
Date: {booking.event_service_date.strftime('%B %d, %Y')}
Time Slot: {time_display}

Customer Information:
Name: {booking.first_name} {booking.last_name}
Email: {booking.customer_email}
Phone: {booking.customer_phone}

Special Requests:
{booking.special_requests or 'None'}

Agreement Accepted: Yes
Booking ID: #{booking.id}
            """.strip()

            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[admin_email],
                fail_silently=True,
            )
        except Exception as e:
            # Log error but don't fail the booking
            pass

        messages.success(
            request,
            "Your booking request has been received. We will contact you shortly.",
        )
        return redirect(
            f"{reverse('shop:product_detail', args=[experience.slug])}?booked=1"
        )

    else:
        # Form has errors - re-render the product page with form errors
        messages.error(request, "Please correct the errors in the booking form.")
        return render(request, "shop/product_detail.html", {
            "item": experience,
            "booking_form": form,
        })
