from django.db import models

# Create your models here.

#serializer class: convert model to JSON data
class Stock(models.Model):
    ticker = models.CharField(max_length=10)
    op = models.FloatField()
    close = models.FloatField()
    volume = models.IntegerField()

    def __str__(self):
        return self.ticker

