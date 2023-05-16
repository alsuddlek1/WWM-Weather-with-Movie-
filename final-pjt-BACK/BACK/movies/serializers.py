from rest_framework import serializers
from .models import Movie, Genre, Review, Comment

# 장르
class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ('name',)

# 영화 리스트 : main 
class MovieListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        # fields = ('title', 'overview','poster_path', 'movie_id',)
        fields = '__all__'

# movie_detail
class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'