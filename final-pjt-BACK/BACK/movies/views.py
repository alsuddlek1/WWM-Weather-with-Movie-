from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status

from .models import Movie, Genre, Review, Comment
from .serializers import MovieSerializer,MovieListSerializer, GenreSerializer, ReviewListSerializer, CommentListSerializer
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
        # if not request.user.reviews.filter(pk=user_pk).exists():
        #     return Response({'권한 없을 無'})
    
    if movie.like_users.filter(pk=user.pk).exists():
        movie.like_users.remove(user)
        is_liked = False
    else:
        movie.like_users.add(user)
        is_liked = True
    return Response(is_liked)


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


# Clouds = [액션, 코미디....]
# for clouds:
#     for 영화:
#         if 액션 in 영화장르:
#             ??.append(영화)


# 날씨에 따른 영화 추천
# @api_view(['GET'])
# def weather(request):
#     movies = get_list_or_404(Movie)

#     thundersorm = [27, 9648, 53]
#     drizzle = [12, 16, 99]
#     rain = [80, 10752]
#     snow = [18, 10751]
#     atmosphere = [28, 14, 35]
#     clear = [10749, 10770]
#     clouds = [37, 36, 10402, 878]

#     res = []
#     if weather == thundersorm:
#         for thun in thundersorm:
#             for movie in movies:
#                 if thun in movie[2]["genres"]:
#                     res.append(movie)
    
#     if weather == drizzle:
#         for dri in drizzle:
#             for movie in movies:
#                 if dri in movie[2][10]:
#                     res.append(movie)
    
#     if weather == rain:
#         for ra in rain:
#             for movie in movies:
#                 if ra in movie[2][10]:
#                     res.append(movie)
                    
#     if weather == snow:
#         for sn in snow:
#             for movie in movies:
#                 if sn in movie[2][10]:
#                     res.append(movie)

#     if weather == atmosphere:
#         for atmo in atmosphere:
#             for movie in movies:
#                 if atmo in movie[2][10]:
#                     res.append(movie)
    
#     if weather == clear:
#         for cle in clear:
#             for movie in movies:
#                 if cle in movie[2][10]:
#                     res.append(movie)
                    
#     if weather == clouds:
#         for clo in clouds:
#             for movie in movies:
#                 if clo in movie[2][10]:
#                     res.append(movie)

#     # print(res)
#     return Response(res)




@api_view(['GET'])
def weather(request, weather2):
    #  미리 장르 추천 딕셔너리 만들어놓고
    URL = 'http://api.openweathermap.org/data/2.5/weather'
    params = {'q' : 'Busan,kor', 'APPID' : '16508fa5d3e2477a89d27d1416030db4'}
    weather = requests.get(URL,params=params).json()
    print(weather['weather'][0]['main'])


    genre_recommend = { 
        'thundersorm' : [27, 9648, 53], 
        'drizzle' : [12, 16, 99],
        'rain' : [80, 10752],
        'snow' : [18, 10751],
        'atmosphere' : [28, 14, 35],
        'clear' : [10749, 10770],
        'clouds' : [37, 36, 10402, 878],
    }


    # 받아온 weather로 장르 추천받아서 그걸로 필터받기
    # 근데 안돼 ㅠ
    re_weather = genre_recommend[weather2]
    for genre_rec in re_weather:
        return genre_rec
    
    movies = Movie.objects.all().filter(genres=genre_rec)
    serializer = MovieListSerializer(movies, many=True)

    return Response(serializer.data)