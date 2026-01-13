from django.contrib import admin
from .models import (
    ShopCategory,
    ShopItem,
    ProductImage,
    UnitType,
    ProductType,
    ProductUnit,
    Cart,
    CartItem,
    ExperienceBooking,
    Order,
    OrderItem,
)


@admin.register(ShopCategory)
class ShopCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    search_fields = ("name",)
    prepopulated_fields = {"slug": ("name",)}


class ProductUnitInline(admin.TabularInline):
    model = ProductUnit
    extra = 1
    fields = (
        "unit_type",
        "label",
        "value",
        "price",
        "is_default",
        "is_active",
    )


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = ("image", "order")
    ordering = ("order",)


@admin.register(ShopItem)
class ShopItemAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "is_experience", "price", "published")
    list_filter = ("category", "is_experience", "published")
    search_fields = ("title", "description")
    prepopulated_fields = {"slug": ("title",)}
    readonly_fields = ("created_at",)

    # 🔴 THIS WAS THE BUG — image MUST be listed here
    fields = (
        "title",
        "slug",
        "category",
        "description",
        "image",        # ✅ MAIN IMAGE FIELD
        "price",
        "tax_percent",
        "is_experience",
        "published",
    )

    # 🔴 Gallery inline must be explicitly attached
    inlines = [
        ProductUnitInline,
        ProductImageInline,
    ]


@admin.register(ExperienceBooking)
class ExperienceBookingAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "experience",
        "event_service_name",
        "customer_name",
        "customer_email",
        "event_service_date",
        "time_slot",
        "status",
        "created_at",
    )
    list_filter = ("status", "event_service_date")
    search_fields = ("customer_name", "customer_email", "first_name", "last_name", "event_service_name")
    readonly_fields = ("created_at", "updated_at", "date_signed", "customer_name")
    fieldsets = (
        ("Experience Details", {
            "fields": ("experience", "event_service_name", "event_service_date", "time_slot")
        }),
        ("Customer Information", {
            "fields": ("first_name", "last_name", "customer_email", "customer_phone", "customer_name")
        }),
        ("Additional Details", {
            "fields": ("special_requests", "agreement_accepted", "date_signed")
        }),
        ("Booking Status", {
            "fields": ("user", "status", "payment_required", "payment_ref")
        }),
        ("Legacy/Metadata", {
            "fields": ("notes", "metadata", "created_at", "updated_at"),
            "classes": ("collapse",)
        }),
    )


@admin.register(ProductType)
class ProductTypeAdmin(admin.ModelAdmin):
    list_display = ("name", "slug")
    search_fields = ("name",)


@admin.register(UnitType)
class UnitTypeAdmin(admin.ModelAdmin):
    list_display = ("name", "code")
    search_fields = ("name", "code")


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "updated_at")
    readonly_fields = ("updated_at",)


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ("cart", "product", "product_unit", "qty", "unit_price")


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "status", "created_at", "total")
    list_filter = ("status",)
    readonly_fields = ("created_at", "updated_at")


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ("order", "title", "qty", "unit_price")
