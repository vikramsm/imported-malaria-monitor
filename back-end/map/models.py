from django.db import models

# Create your models here.
class MalariaCase(models.Model):
    # District where infection was first notified (diagnosed)
    munNoti = models.IntegerField()
    # District where patient lives
    munResi = models.IntegerField()
    # District where infection most likely originated
    munInfe = models.IntegerField()

    def __str__(self):
        return f"MUN_NOTI: {self.munNoti}, MUN_RESI: {self.munResi}, MUN_INFE: {self.munInfe}"
