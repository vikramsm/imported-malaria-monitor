from django.shortcuts import render

# Create your views here.

import base64
import os
import time
import traceback
from io import BytesIO

import imageio
import matplotlib.pyplot as plt
from django.core.files.storage import FileSystemStorage
from django.http import JsonResponse
from django.shortcuts import redirect, render
from termcolor import colored
from django.urls import reverse
from myproject import settings
from django.views.generic import TemplateView
#####
from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import bcrypt
from .models import User
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic

from .forms import *
from django.views.generic.edit import FormView
#from .forms import FileFieldForm

#from .models import ImageSeries
from django.core.exceptions import ObjectDoesNotExist

#from dicomapp.models import Location, Hospital, Doctor, Patient, MedicalInfo,Prescription, Admission, Appointment, MedicalTest,Contact
from django.http import HttpResponseRedirect


from django_tables2 import RequestConfig
#from .tables import PatientTable, AdmissionTable, AppointmentTable

from django.contrib.auth import views as auth_views


def index(request):
    return render(request, 'index.html')


	
def register(request):
    errors = User.objects.validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/')

    hashed_password = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
    user = User.objects.create(first_name=request.POST['first_name'], last_name=request.POST['last_name'], password=hashed_password, email=request.POST['email'])
    user.save()
    request.session['id'] = user.id
    return redirect('/success')

def login(request):
    if (User.objects.filter(email=request.POST['login_email']).exists()):
        user = User.objects.filter(email=request.POST['login_email'])[0]
        if (bcrypt.checkpw(request.POST['login_password'].encode(), user.password.encode())):
            request.session['id'] = user.id
            return redirect('/success')
    return redirect('/')


# Static page for About us
class AboutPageView(TemplateView):
    template_name = 'about.html'	

# Static page for Contact us
class ContactPageView(TemplateView):
    template_name = 'contact.html'	
	
	
# Static page for directions
class DirectionsPageView(TemplateView):
    template_name = 'directions.html'

# Static page for Message display
class MessagePageView(TemplateView):
    template_name = 'messages.html'	
	
# Static page for Geomap display
class MapPageView(TemplateView):
    template_name = 'map.html'	

# View for contact us form
def contact(request):
    if request.method == 'POST':
        # POST, generate bound form with data from the request
        form = ContactForm(request.POST)
        # check if it's valid:
        if form.is_valid():
            # Insert into DB
            form.save()
            # redirect to a new URL:
            return HttpResponseRedirect('success.html')
    else:
        # GET, generate unbound (blank) form
        form = ContactForm()
    return render(request,'contactform.html',{'form':form})
