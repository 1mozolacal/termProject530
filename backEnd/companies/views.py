from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Stock
from .serializers import StockSerializer

# Create your views here.
#List all stocks or create a new one
#stocks/ -> get all stocks

class StockList(APIView):
    #get request
    def get(self,request):
        stocks = Stock.objects.all()
        serializer = StockSerializer(stocks,many = True)
        return Response(serializer.data)

    #post request
    def post(self):
        pass