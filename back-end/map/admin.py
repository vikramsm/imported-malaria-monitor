from django.contrib import admin

from .models import Municipality, MalariaCase, Patient

# Register your models here.
admin.site.register(Municipality)
admin.site.register(MalariaCase)
admin.site.register(Patient)
