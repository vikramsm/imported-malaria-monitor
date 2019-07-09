from django.http import HttpResponse, Http404
from django.http import JsonResponse


# Create your views here.

def api(request):
    return HttpResponse("Map API")


def getMap(request):
    message = request.GET.get('message')

    properties = {
        "Country": "Brazil",
        "State": "Acre",
        "Municipality": "Acrelândia",
        "count": 23
    }

    return JsonResponse(properties)
