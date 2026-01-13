from django import forms
from .models import ExperienceBooking

# Static time slot options
TIME_SLOT_CHOICES = [
    ('', 'Select a time slot'),
    ('09:00', '9:00 AM'),
    ('10:00', '10:00 AM'),
    ('11:00', '11:00 AM'),
    ('12:00', '12:00 PM'),
    ('13:00', '1:00 PM'),
    ('14:00', '2:00 PM'),
    ('15:00', '3:00 PM'),
    ('16:00', '4:00 PM'),
    ('17:00', '5:00 PM'),
    ('18:00', '6:00 PM'),
]


class ExperienceBookingForm(forms.ModelForm):
    """
    Form for booking experiences.
    Email + Database submission.
    """

    time_slot = forms.ChoiceField(
        choices=TIME_SLOT_CHOICES,
        required=True,
        widget=forms.Select(attrs={'class': 'form-input'})
    )

    class Meta:
        model = ExperienceBooking
        fields = [
            'event_service_name',
            'event_service_date',
            'time_slot',
            'first_name',
            'last_name',
            'customer_email',
            'customer_phone',
            'special_requests',
            'agreement_accepted',
        ]
        widgets = {
            'event_service_name': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'Enter event or service name',
            }),
            'event_service_date': forms.DateInput(attrs={
                'class': 'form-input',
                'type': 'date',
            }),
            'first_name': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'First Name',
            }),
            'last_name': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': 'Last Name',
            }),
            'customer_email': forms.EmailInput(attrs={
                'class': 'form-input',
                'placeholder': 'example@example.com',
            }),
            'customer_phone': forms.TextInput(attrs={
                'class': 'form-input',
                'placeholder': '(###) ###-####',
            }),
            'special_requests': forms.Textarea(attrs={
                'class': 'form-input',
                'placeholder': 'Any special requests or comments',
                'rows': 4,
            }),
            'agreement_accepted': forms.CheckboxInput(attrs={
                'class': 'form-checkbox',
            }),
        }
        labels = {
            'event_service_name': 'Event/Service Name',
            'event_service_date': 'Event/Service Date',
            'time_slot': 'Select Time Slot',
            'first_name': 'First Name',
            'last_name': 'Last Name',
            'customer_email': 'Email',
            'customer_phone': 'Phone Number',
            'special_requests': 'Special Requests or Comments',
            'agreement_accepted': 'I agree to the arrival and rescheduling policy',
        }

    def clean_agreement_accepted(self):
        """Ensure agreement is checked"""
        agreement = self.cleaned_data.get('agreement_accepted')
        if not agreement:
            raise forms.ValidationError('You must agree to the terms and conditions.')
        return agreement

    def clean_customer_phone(self):
        """Basic phone validation"""
        phone = self.cleaned_data.get('customer_phone')
        if phone:
            # Remove common separators
            phone = phone.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')
            if not phone.isdigit() or len(phone) < 10:
                raise forms.ValidationError('Please enter a valid phone number.')
        return phone
