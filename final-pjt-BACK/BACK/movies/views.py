from django.shortcuts import render, get_object_or_404, get_list_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Movie, Genre, Review, Comment
from .serializers import MovieSerializer,MovieListSerializer, GenreSerializer, ReviewListSerializer, CommentListSerializer

# Create your views here.
@api_view(['GET'])
def main(request):
    movies = get_list_or_404(Movie)
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)


@api_view(['POST', 'GET'])
def review(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    if request.method == 'GET':
        reviews = Review.objects.all().filter(movie_id = movie_pk)
        serializer = ReviewListSerializer(reviews, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ReviewListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(['PUT', 'DELETE'])
def review_detail(request,movie_pk, review_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    review = get_object_or_404(Review, pk=review_pk)
    if request.method == 'DELETE':
        review.delete()
        data = { 'delete' : f'review {review_pk} is deleted'}
        return Response(data, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = ReviewListSerializer(review, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(movie=movie)
            return Response(serializer.data)