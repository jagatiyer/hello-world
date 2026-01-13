from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactSubmission


def contact_page(request):
    if request.method == "POST":
        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        phone = request.POST.get("phone", "").strip()
        subject = request.POST.get("subject", "").strip()
        message = request.POST.get("message", "").strip()

        # Save to DB
        submission = ContactSubmission.objects.create(
            name=name,
            email=email,
            phone=phone,
            subject=subject,
            message=message,
        )

        # Send email notification to admin
        try:
            admin_email = getattr(settings, 'CONTACT_EMAIL', settings.DEFAULT_FROM_EMAIL)
            email_subject = f'New Contact Form Submission: {subject or "No Subject"}'
            email_body = f"""
New contact form submission received:

Name: {name}
Email: {email}
Phone: {phone}
Subject: {subject}

Message:
{message}

---
Submission ID: {submission.id}
Submitted at: {submission.created_at.strftime('%Y-%m-%d %H:%M:%S')}
"""
            send_mail(
                subject=email_subject,
                message=email_body,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[admin_email],
                fail_silently=True,
            )
        except Exception as e:
            # Log error but don't fail the submission
            print(f"Email sending failed: {e}")

        # Success toast
        messages.success(request, "Message Sent Successfully!")

        # Clear form (redirect)
        return redirect("contact_page")

    return render(request, "contact/contact_page.html")
