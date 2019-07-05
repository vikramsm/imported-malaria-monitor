from django import forms
from .models import *

from datetime import date

from django import forms
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


# Contact form for general enquiries
class ContactForm(forms.ModelForm):
      class Meta:      
            model = Contact
            fields = '__all__'
