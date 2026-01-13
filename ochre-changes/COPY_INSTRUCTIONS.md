# 🚀 Ochre L1 Changes - Ready to Use

## What's Inside

All the completed L1 changes:
- ✅ Story page (fixed timeline)
- ✅ Society page (fixed timeline)
- ✅ Contact form (with email notifications)
- ✅ Experience booking form (complete with all fields)

## 📋 Quick Start (3 Steps)

### Step 1: Copy These Files to Your Ochre Project

```bash
# Navigate to your ochre project
cd /path/to/your/ochre

# Copy all files (maintains folder structure)
cp -r /path/to/ochre-changes/contact/* contact/
cp -r /path/to/ochre-changes/shop/* shop/
cp -r /path/to/ochre-changes/templates/* templates/
cp -r /path/to/ochre-changes/ochre/* ochre/
```

### Step 2: Setup & Migrate

```bash
# Activate virtual environment (or create if needed)
source venv/bin/activate
# OR: python3 -m venv venv && source venv/bin/activate

# Install requirements (if not already done)
pip install -r requirements.txt

# Run migrations (IMPORTANT!)
python manage.py migrate
```

### Step 3: Run Server

```bash
python manage.py runserver
```

Then open your browser:
- http://127.0.0.1:8000/story/
- http://127.0.0.1:8000/society/
- http://127.0.0.1:8000/contact/

## 📁 File Structure

```
ochre-changes/
├── contact/
│   ├── forms.py          (fixed model reference)
│   └── views.py          (added email notifications)
├── shop/
│   ├── admin.py          (enhanced admin interface)
│   ├── forms.py          (NEW - booking form)
│   ├── models.py         (added booking fields)
│   ├── views.py          (added booking logic + emails)
│   └── migrations/
│       └── 0002_*.py     (NEW - database migration)
├── templates/
│   ├── shop/
│   │   └── product_detail.html  (added booking form section)
│   └── story/
│       ├── story_page.html      (fixed timeline)
│       └── society.html         (fixed timeline)
└── ochre/
    └── settings.py       (added email configuration)
```

## 🧪 Testing Booking Form

1. Create a superuser (if you don't have one):
   ```bash
   python manage.py createsuperuser
   ```

2. Go to admin: http://127.0.0.1:8000/admin

3. Add a new Shop Item:
   - Shop → Shop items → Add
   - Fill in title, slug, price
   - **CHECK the "Is experience" checkbox** ✓
   - Save

4. Visit the product page:
   http://127.0.0.1:8000/shop/{your-product-slug}/

5. You'll see the booking form instead of "Add to Cart"!

## 📧 Email Testing

Emails are set to console backend (prints in terminal).

When you submit contact form or booking form, check your terminal - you'll see the email output!

To use real email in production, update `ochre/settings.py`:
- Change EMAIL_BACKEND to smtp
- Add your SMTP credentials

## ✅ What Works

- Story page with proper timeline (colored dots + content)
- Society page with 5 benefits timeline
- Contact form sends email to hello@ochrespirits.com + saves to database
- Booking form with all fields (date, time, customer info, requests)
- Booking form sends email + saves to database
- Form validation on both forms
- Admin interface to view submissions

## 🎨 CSS

All pages use your existing style.css - **zero new CSS added**!

## 🆘 Troubleshooting

**Migration Error?**
```bash
python manage.py migrate --run-syncdb
```

**Import Error?**
Make sure you copied all files to the correct locations.

**Template Not Found?**
Check that templates are in the right folders.

**No Booking Form Showing?**
Make sure the product has "Is experience" checkbox checked in admin.

---

**Questions?** The changes are fully documented in each file.
