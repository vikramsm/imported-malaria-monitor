from django.db import models

# Create your models here.
class MalariaInfection(models.Model):
    location = models.CharField(max_length=36)