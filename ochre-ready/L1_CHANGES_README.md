# 🎨 Ochre L1 Changes - Complete & Ready

This branch contains all L1 requirement changes, fully integrated and ready to test.

## ✅ What's Included

1. **Story Page** (`/story/`) - Fixed timeline structure using existing CSS
2. **Society Page** (`/society/`) - Fixed timeline structure using existing CSS
3. **Contact Form** (`/contact/`) - Now sends email notifications + database storage
4. **Experience Booking Form** - Complete with all fields, validation, email notifications

## 🚀 Quick Start (3 Commands)

```bash
# 1. Setup virtual environment and install
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# 2. Run migrations
python manage.py migrate

# 3. Start server
python manage.py runserver
```

## 🌐 Test the Pages

Open your browser and visit:

- **Story Page**: http://127.0.0.1:8000/story/
- **Society Page**: http://127.0.0.1:8000/society/
- **Contact Page**: http://127.0.0.1:8000/contact/

## 📧 Email Testing

Emails are configured to print in the console (terminal).

When you submit the contact form or booking form:
- Check your terminal window
- You'll see the email content printed there

## 🧪 Test Booking Form

The booking form appears on products marked as "experiences".

### Create a Test Experience:

1. Create superuser (if needed):
   ```bash
   python manage.py createsuperuser
   ```

2. Login to admin: http://127.0.0.1:8000/admin

3. Add a Shop Item:
   - Go to Shop → Shop items → ADD SHOP ITEM
   - Fill in:
     - **Title**: Wine Tasting Experience
     - **Slug**: wine-tasting
     - **Price**: 50
     - **✓ Check "Is experience" checkbox** (IMPORTANT!)
   - Click SAVE

4. Visit: http://127.0.0.1:8000/shop/wine-tasting/

5. You should see the booking form with:
   - Event/Service Name
   - Date picker
   - First Name / Last Name
   - Email / Phone
   - Time slot dropdown (9 AM - 6 PM)
   - Special requests textarea
   - Agreement checkbox
   - BOOK NOW button

6. Fill it out and submit - check terminal for email!

## 📝 What Changed

### Files Modified:
- `contact/forms.py` - Fixed model reference
- `contact/views.py` - Added email notifications
- `ochre/settings.py` - Added email configuration
- `shop/admin.py` - Enhanced admin interface
- `shop/forms.py` - **NEW FILE** - Booking form with validation
- `shop/models.py` - Added booking form fields
- `shop/views.py` - Added booking logic with emails
- `shop/migrations/0002_*.py` - **NEW FILE** - Database migration
- `templates/shop/product_detail.html` - Added booking form section
- `templates/story/story_page.html` - Fixed timeline structure
- `templates/story/society.html` - Fixed timeline structure

### CSS Changes:
**NONE** - All pages use your existing `style.css` without any modifications.

## 🎯 What You Should See

### Story Page:
- "SINCE 2023" label in red
- "Our Story" heading
- Content grid with text + image placeholder
- Philosophy section with 3 colored numbered circles (red, green, orange)
- Journey timeline with 3 colored dots
- "Experience Our Story" call-to-action section

### Society Page:
- "The Ochre Society" heading
- Dining membership description
- "How It Works" section
- 5-item benefits timeline with colored dots
- Membership tiers section

### Contact Form:
- Form submits successfully
- Shows "Message Sent Successfully!" toast
- Email printed in terminal
- Saves to database (view in admin)

### Booking Form:
- Shows on experience products only
- All fields with proper validation
- Time slot dropdown
- Agreement checkbox required
- Email notification on submission
- Database storage (view in admin: Shop → Experience bookings)

## 🔧 Troubleshooting

**Migration error?**
```bash
python manage.py migrate --run-syncdb
```

**No booking form showing?**
- Make sure the product has "Is experience" checkbox checked in admin

**Import errors?**
- Make sure virtual environment is activated: `source venv/bin/activate`
- Reinstall requirements: `pip install -r requirements.txt`

**Email not showing?**
- Check your terminal window (where runserver is running)
- Emails print to console by default

## 📊 Database Changes

The migration adds these fields to `ExperienceBooking` model:
- `event_service_name`
- `event_service_date`
- `time_slot`
- `first_name`
- `last_name`
- `special_requests`
- `agreement_accepted`
- `date_signed`

## 🎨 Design Notes

All templates use existing CSS classes from your `style.css`:
- `.story-page`, `.story-header`, `.story-tagline`
- `.story-content`, `.story-text`, `.story-image`
- `.story-philosophy`, `.philosophy-grid`, `.philosophy-item`
- `.story-journey`, `.timeline`, `.timeline-item`, `.timeline-dot`, `.timeline-content`
- Color variants: `.red`, `.green`, `.orange`

No inline styles except for the time slot dropdown (maintains existing product detail styling).

## ✅ Production Checklist

Before deploying to production:

1. Update email settings in `ochre/settings.py`:
   - Change `EMAIL_BACKEND` to SMTP
   - Add your SMTP credentials
   - Update `CONTACT_EMAIL` if needed

2. Test all forms in production environment

3. Check email delivery is working

4. Verify admin panel access to view submissions

---

**Questions or issues?** All changes are documented in the code with comments.
