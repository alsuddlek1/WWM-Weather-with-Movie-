from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import Movie, Genre, Review, Comment, Worldcup
from .serializers import MovieSerializer,MovieListSerializer, GenreSerializer, ReviewListSerializer, CommentListSerializer, WorldcupSerializer
# from .pagination import MovieNumberPagination

# Create your views here.
# movie_list
from rest_framework.pagination import PageNumberPagination
import requests


class CustomPagination(PageNumberPagination):
    page_size = 20  # 페이지당 항목 수
    page_query_param = 'page'  # 페이지 번호를 전달하는 GET 매개변수 이름
    page_size_query_param = 'size'  # 페이지 크기를 전달하는 GET 매개변수 이름
    max_page_size = 20  # 페이지 크기의 최댓값

@api_view(['GET'])
def main(request):
    movies = get_list_or_404(Movie)
    paginator = CustomPagination()
    result_page = paginator.paginate_queryset(movies, request)
    # serializer = MovieListSerializer(movies, many=True)
    serializer = MovieListSerializer(result_page, many=True)
    # pagination = MovieNumberPagination
    # return Response(serializer.data)
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET'])
def random(request):
    movies = get_list_or_404(Movie)
    serializer = MovieListSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)

@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def review(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    if request.method == 'GET':
        reviews = Review.objects.all().filter(movie_id = movie_pk)
        serializer = ReviewListSerializer(reviews,many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ReviewListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user = request.user, movie=movie)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    
@api_view(['PUT', 'DELETE'])
def review_detail(request,movie_pk, review_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    review = get_object_or_404(Review, pk=review_pk)
    if not request.user.reviews.filter(pk=review_pk).exists():
        return Response({'권한 없을 無'})
    else:
        if request.method == 'DELETE':
            review.delete()
            data = { 'delete' : f'review {review_pk} is deleted'}
            return Response(data, status=status.HTTP_204_NO_CONTENT)
        elif request.method == 'PUT':
            serializer = ReviewListSerializer(review, data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(movie=movie)
                return Response(serializer.data)
        
       
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comments(request, review_pk):
    review = get_object_or_404(Review, pk=review_pk)
    if request.method == 'GET':
        comments = Comment.objects.all().filter(review_id = review_pk)
        serializer = CommentListSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CommentListSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user = request.user, review=review)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
@api_view(['PUT', 'DELETE'])
def comment_detail(request,review_pk, comment_pk):
    review = get_object_or_404(Review, pk=review_pk)
    comment = get_object_or_404(Comment, pk=comment_pk)
    if not request.user.comments.filter(pk=comment_pk).exists():
        return Response({'권한 없을 無'})
    if request.method == 'DELETE':
        comment.delete()
        data = { 'delete' : f'comment {comment_pk} is deleted'}
        return Response(data, status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = CommentListSerializer(comment, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(review=review)
            return Response(serializer.data)

# 영화 좋아요
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def movie_like(request, user_pk, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = get_object_or_404(get_user_model(), pk=user_pk)
    serializer = MovieListSerializer(movie)
    
    if movie.like_users.filter(pk=user.pk).exists():
        movie.like_users.remove(user)
        is_liked = False
    else:
        movie.like_users.add(user)
        is_liked = True
    
    data = {
        'movie' : serializer.data,
        'is_liked' : is_liked
    }
    return Response(data)


# 좋아요한 영화
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_like(request, user_pk):
    movies = get_list_or_404(Movie)
    user = get_object_or_404(get_user_model(), pk=user_pk)
    like_movie_list = set()
    for movie in movies:
        if movie.like_users.filter(pk=user_pk).exists():
            like_movie_list.add(movie)
    
    serializer = MovieListSerializer(like_movie_list, many=True)
    return Response(serializer.data)

# 인기 영화
@api_view(['GET'])
def popular_movies(request):
    movies = get_list_or_404(Movie)
    popular_movie_list = set()
    for movie in movies:
        popular_movie_list.add(movie)
        
    popular_movie_list = list(popular_movie_list)
    popular_movies = sorted(popular_movie_list, key= lambda x : x.vote_count, reverse = True)[:64]

    serializer = MovieListSerializer(popular_movies, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def weather(request, lat, lon):
    # 날씨 api 
    URL = 'http://api.openweathermap.org/data/2.5/weather'
    params = {'lat' : lat, 'lon' : lon, 'APPID' : '16508fa5d3e2477a89d27d1416030db4'}
    weather = requests.get(URL,params=params).json()
    request_weather = weather['weather'][0]['main'] # 오늘 요청받은 날씨
    local_name = weather['name']

    # 날씨별 장르 추천
    genre_recommend = { 
        'Thunderstorm' : [80, 10752, 27, 9648, 53], # 공포, 미스터리, 스릴러
        'Drizzle' : [80, 10752,27, 9648, 53], # 이슬비 : 모험, 애니메이션, 다큐멘터리
        'Rain' : [53, 80, 10752, 27, 9648], # 범죄, 전쟁, 스릴러, 공포
        'Snow' : [18, 10751], # 가족, 드라마
        'Atmosphere' : [28, 10749], # 코미디, 액션, 판타지
        'Clear' : [10749, 16], # 로맨스, tv 영화
        'Clouds' : [80, 10752,27, 9648, 53], # 서부, SF, 역사, 음악
    }

    genre_re = genre_recommend[request_weather] 


    result = []
    for genre_rec in genre_re:
        movies = Movie.objects.all().filter(genres=genre_rec)[:5]
        serializer = MovieListSerializer(movies, many=True)
        for serial in serializer.data:
            if serial not in result:
                result.append(serial)

    today_weather = {
        'weather' : request_weather,
        'result' : result[:8],
        'local_name' : local_name
    }
    return Response(today_weather)

# 월드컵
@api_view(['GET'])
def worldcup(request):
    worldcups = get_list_or_404(Worldcup)
    serializer = WorldcupSerializer(worldcups, many=True)
    print(len(serializer.data))
    return Response(serializer.data)
