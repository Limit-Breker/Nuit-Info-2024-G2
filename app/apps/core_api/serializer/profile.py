from rest_framework import serializers
from core.models import Profile


class ProfileOrganSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['coeur', 'poumon', 'rein', 'foie']


class ProfileSucceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['succe']


class ProfilePokecoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['pokecoin']
