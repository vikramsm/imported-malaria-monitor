from django.http import HttpResponse, Http404


# Create your views here.

def home(request):
    return HttpResponse("Map API")


def getMap(request):
    return HttpResponse("Get MAP")
