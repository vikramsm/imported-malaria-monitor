from django.http import HttpResponse, Http404
from django.shortcuts import render

from .models import MalariaCase

# Create your views here.

def home(request):
   return render(request, "map/home.html")

def index(request):
    context = {
        "malariaCases" : MalariaCase.objects.all()
    }
    return render(request, "map/index.html", context)

def malariacase(request, case_id):
    try:
        case = MalariaCase.objects.get(pk=case_id)
    except MalariaCase.DoesNotExist:
        raise Http404("Case does not exist.")
    context = {
        "case": case,
        "patients": case.patients.all()
    }
    return render (request, "map/malariacase.html", context)
