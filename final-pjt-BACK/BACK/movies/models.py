from django.db import models
from django.conf import settings
# from accounts.models import User

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    genres = models.ManyToManyField(Genre)
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_reviews')

    movie_id = models.TextField()
    title = models.TextField()
    original_title = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    release_date = models.TextField()
    # runtime = models.IntegerField()
    popularity = models.FloatField()
    adult = models.BooleanField()
    backdrop_path = models.CharField(max_length=500)

class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="reviews")

    title = models.CharField(max_length=50)
    content = models.TextField()
    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="comments")

    content = models.CharField(max_length=50)
    create_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Worldcup(models.Model):
    genres = models.ManyToManyField(Genre)
    movie_id = models.TextField()
    title = models.TextField()
    original_title = models.TextField()
    overview = models.TextField()
    poster_path = models.TextField()
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    release_date = models.TextField()
    # runtime = models.IntegerField()
    popularity = models.FloatField()
    adult = models.BooleanField()
    backdrop_path = models.CharField(max_length=500)