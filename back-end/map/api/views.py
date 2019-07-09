from django.http import HttpResponse, Http404


# Create your views here.

def api(request):
    return HttpResponse("Map API")


def getMap(request):
    message = request.GET.get('message')
    print(message)
    return HttpResponse("Get MAP")
