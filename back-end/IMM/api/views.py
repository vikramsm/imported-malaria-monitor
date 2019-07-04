from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import MalariaSerializer
from .models import Malaria

class MalariaViewSet(viewsets.ModelViewSet):
    queryset = Malaria.objects.all()
    serializer_class = MalariaSerializer
