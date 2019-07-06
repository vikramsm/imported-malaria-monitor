from django.db import models

# Create your models here.
class MalariaCase(models.Model):
    infectionDistrict = models.IntegerField()
    patientDistrict = models.IntegerField()
    originDistrict = models.IntegerField()
