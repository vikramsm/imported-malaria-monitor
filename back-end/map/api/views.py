from django.http import HttpResponse, Http404
from django.http import JsonResponse
import json

from .municipalityproperties import MUNICIPALITIES_AMAZONAS, CaseType

# Create your views here.

def api(request):
    return HttpResponse("Map API")


def getMap(request):
    caseTypeStr = request.GET.get('casetype')
    responseArray = []

    for municipality in MUNICIPALITIES_AMAZONAS:
        responseArray.append(municipality.getProperties(CaseType.sameMuni))

    jsonResp = json.dumps(responseArray)

    return HttpResponse(jsonResp, content_type="application/json")
