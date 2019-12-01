from django.db import models


# Create your models here.
class Pic(models.Model):
    cap = models.CharField(max_length=100)
    url = models.CharField(max_length=500)
    des = models.TextField((""))
    author = models.CharField(max_length=50)

    def __str__(self):
        return self.cap
