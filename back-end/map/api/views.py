from django.http import HttpResponse, Http404
import json

from .municipalityproperties import MUNICIPALITIES_AMAZONAS, CaseType


# Create your views here.

def api(request):
    return HttpResponse("Map API")


def getMap(request):
    try:
        caseTypeStr = request.GET.get('caseType')
        caseType = CaseType[caseTypeStr]
    except:
        raise Http404

    responseArray = []

    for municipality in MUNICIPALITIES_AMAZONAS:
        responseArray.append(municipality.getProperties(caseType))

    jsonResp = json.dumps(responseArray)

    return HttpResponse(jsonResp, content_type="application/json")
