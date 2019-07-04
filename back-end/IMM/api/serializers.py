from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Malaria

class MalariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Malaria
        fields = ('id', 'location', 'origin', 'year')
