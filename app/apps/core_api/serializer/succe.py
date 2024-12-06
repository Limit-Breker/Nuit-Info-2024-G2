from rest_framework import serializers
from core.models import Succe


class SucceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Succe
        fields = ['nom', 'description']
