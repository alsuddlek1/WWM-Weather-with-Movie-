from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    genres = models.ManyToManyField(Genre)

    movie_id = models.TextField()
    title = models.TextField()
    original_title = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    release_date = models.TextField()
    runtime = models.IntegerField()
    popularity = models.FloatField()
    adult = models.BooleanField()
    backdrop_path = models.CharField(max_length=500)