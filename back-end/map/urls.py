from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:case_id>", views.malariaCase, name="malariacase")
]
