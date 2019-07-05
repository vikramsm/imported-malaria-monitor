from django.urls import path

from . import views

urlpatterns = [
    path("", views.home),
    path("<int:case_id>", views.malariacase, name="malariacase")
]
