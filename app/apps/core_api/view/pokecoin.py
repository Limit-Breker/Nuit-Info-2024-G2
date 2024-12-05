from rest_framework.views import APIView
from rest_framework.response import Response
from core.models import Pokecoin
from ..serializer.pokecoin import PokecoinSerializer


class PokecoinView(APIView):
    def get(self, request):
        pokecoin = Pokecoin.objects.all()
        serializer = PokecoinSerializer(pokecoin, many=True)
        return Response(serializer.data)
