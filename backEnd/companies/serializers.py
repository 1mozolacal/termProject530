from rest_framework import serializers

from .models import Stock

class StockSerializer(serializers.ModelSerializer):

    class Meta:
        model = Stock
        #fields = ('ticker','volume')
        #the code above returns 2 fields
        fields = '__all__' # this one returns all of them