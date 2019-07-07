from django.http import HttpResponse, Http404
from django.shortcuts import render

from .models import MalariaCase

# Create your views here.

def home(request):
   return render(request, "map/home.html")

def index(request):
    return render(request, "map/index.html")

def databaseIndex(request):
    context = {
        "malariaCases" : MalariaCase.objects.all()
    }
    return render(request, "map/databaseindex.html", context)

def malariaCase(request, case_id):
    try:
        case = MalariaCase.objects.get(pk=case_id)
    except MalariaCase.DoesNotExist:
        raise Http404("Case does not exist.")
    context = {
        "case": case,
        "patients": case.patients.all()
    }
    return render (request, "map/malariacase.html", context)
