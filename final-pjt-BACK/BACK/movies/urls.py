from django.urls import path
from . import views

app_name = 'movies'
urlpatterns = [
    # movies
    path('', views.main),
    path('<int:movie_pk>/', views.movie_detail),
]
