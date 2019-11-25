from django.db import models

# Create your models here.

#album name has primary key 1
class Album(models.Model):
    artist = models.CharField(max_length=250)
    album_title = models.CharField(max_length=500)
    genre = models.CharField(max_length=100)
    album_logo = models.CharField(max_length=1000)
    #display album
    def __str__(self):
        return self.album_title + '-' + self.artist
class Song(models.Model):
    album = models.ForeignKey(Album,on_delete=models.CASCADE) #if delete the album, all songs will be deleted
    file_type = models.CharField(max_length=10)
    song_type = models.CharField(max_length=250)