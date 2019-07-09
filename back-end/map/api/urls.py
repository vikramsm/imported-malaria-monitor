from django.urls import path

from . import views

urlpatterns = [
    path("", views.api),
    path("/getmap/", views.getMap, name="getmap")
]
