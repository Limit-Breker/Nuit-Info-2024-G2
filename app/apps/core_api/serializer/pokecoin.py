from rest_framework import serializers
from core.models import Pokecoin


class PokecoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokecoin
        fields = ['nom', 'description']
