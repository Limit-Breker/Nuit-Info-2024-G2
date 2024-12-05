from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from core.models import Profile
from ..serializer.profile import ProfileOrganSerializer, ProfileSucceSerializer, ProfilePokecoinSerializer


class ProfileOrganView(APIView):
    def get(self, request):
        profile = Profile.objects.get(utilisateur=request.user)
        serializer = ProfileOrganSerializer(profile)
        return Response(serializer.data)

    def patch(self, request):
        profile = Profile.objects.get(utilisateur=request.user)
        serializer = ProfileOrganSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfileSucceView(APIView):
    def get(self, request):
        profile = Profile.objects.get(utilisateur=request.user)
        serializer = ProfileSucceSerializer(profile)
        return Response(serializer.data)

    def patch(self, request):
        profile = Profile.objects.get(utilisateur=request.user)
        serializer = ProfileSucceSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProfilePokecoinView(APIView):
    def get(self, request):
        profile = Profile.objects.get(utilisateur=request.user)
        serializer = ProfilePokecoinSerializer(profile)
        return Response(serializer.data)

    def patch(self, request):
        profile = Profile.objects.get(utilisateur=request.user)
        serializer = ProfilePokecoinSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
