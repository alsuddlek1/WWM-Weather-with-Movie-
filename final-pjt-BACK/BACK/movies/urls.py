from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    # movies
    path('', views.main),
    path('<int:movie_pk>/', views.movie_detail),

    # movies_review
    path('<int:movie_pk>/reviews/', views.review), # review create
    path('<int:movie_pk>/<int:review_pk>/', views.review_detail), # review detail

    # review_comment
    path('<int:review_pk>/comments/', views.comments),
    path('<int:review_pk>/comments/<int:comment_pk>/', views.comment_detail),

    # movie_like
    path('<int:user_pk>/<int:movie_pk>/like/', views.movie_like),
    

    # recommend
    path('recommend/popular/', views.popular_movies),
    path('recommend/like/', views.user_like),
]
