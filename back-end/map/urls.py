from django.urls import path

from . import views

urlpatterns = [
    path("", views.index),
    path("map", views.home, name="map"),
    path("index", views.databaseIndex, name="databaseindex"),
    path("index/<int:case_id>", views.malariaCase, name="malariacase")
]
