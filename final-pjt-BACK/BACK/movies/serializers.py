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

# Review_list (각 영화의 리뷰 생성)
class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        # fields = ('title', 'content',)
        fields = '__all__'
        read_only_fields = ['movie',]

# Review_detail (각 영화의 각 리뷰 디테일)
# class ReviewSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Review
#         fields = '__all__'

# Comments (리뷰에 대한 댓글)
class CommentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['review',]