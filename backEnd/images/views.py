from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework.views import APIview
from rest_framework.response import Response
from rest_framework import status
from .models import Image
from .serializers import ImageSerializer
# Create your views here.

class ImageList(APIview):

    def get(self,request):
        images = Image.objects.all()
        serializer = ImageSerializer(images,many=True)
        return Response(serializer.data)

    def post(self):
        pass