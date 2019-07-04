from django.db import models

# Create your models here.
class Malaria(models.Model):
    location = models.CharField(max_length=32)
    origin = models.CharField(max_length=256)
    year = models.IntegerField()
