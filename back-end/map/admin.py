from django.contrib import admin

from .models import Municipality, MalariaCase, Patient

# Register your models here.
class PatientInline(admin.StackedInline):
    model = Patient.cases.through
    extra = 1

class MalariaCaseAdmin(admin.ModelAdmin):
    inlines = [PatientInline]

class PatientAdmin(admin.ModelAdmin):
    filter_horizontal = ("cases",)

admin.site.register(Municipality)
admin.site.register(MalariaCase, MalariaCaseAdmin)
admin.site.register(Patient, PatientAdmin)
