from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Pic
from .serializers import PicSerializer


class PicList(APIView):
    def get(self, request):
        pictures = Pic.objects.all()
        serializer = PicSerializer(pictures, many=True)
        return Response(serializer.data)

    def post(self):
        pass