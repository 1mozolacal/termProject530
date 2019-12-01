from .models import Pic
from rest_framework import viewsets, permissions
from .serializers import PicSerializer

#PIC VIEW SET
class PicViewSet(viewsets.ModelViewSet):
    queryset = Pic.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = PicSerializer