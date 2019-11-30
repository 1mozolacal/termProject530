from django.db import models

# Create your models here.
class Image(models.Model):

    caption = models.CharField(max_length=500)
    url = models.CharField(max_length=5000)
    desc = models.TextField()

    def __str__(self):
        return self.caption