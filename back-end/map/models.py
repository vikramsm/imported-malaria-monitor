from django.db import models

# Create your models here.
class Municipality(models.Model):
    code = models.IntegerField()
    name = models.CharField(max_length=64)
    state = models.CharField(max_length=32)

    def __str__(self):
        return f"{self.name} ({self.code})"

class MalariaCase(models.Model):
    # Municipality where infection was first notified (diagnosed)
    munNoti = models.ForeignKey(Municipality, on_delete=models.PROTECT, related_name="target")
    # Municipality where patient lives
    munResi = models.ForeignKey(Municipality, on_delete=models.PROTECT, related_name="residence")
    # Municipality where infection most likely originated
    munInfe = models.ForeignKey(Municipality, on_delete=models.PROTECT, related_name="origin")

    def __str__(self):
        return f"{self.id} - MUN_NOTI: {self.munNoti}, MUN_RESI: {self.munResi}, MUN_INFE: {self.munInfe}"
