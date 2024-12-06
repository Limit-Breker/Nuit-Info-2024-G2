from rest_framework.views import APIView
from rest_framework.response import Response
from core.models import Succe
from ..serializer.succe import SucceSerializer


class SucceView(APIView):
    def get(self, request):
        succes = Succe.objects.all()
        serializer = SucceSerializer(succes, many=True)
        return Response(serializer.data)
