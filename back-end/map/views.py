from django.http import HttpResponse
from django.shortcuts import render

from .models import MalariaCase

# Create your views here.
def index(request):
    context = {
        "malariaCases" : MalariaCase.objects.all()
    }
    return render(request, "map/index.html", context)
