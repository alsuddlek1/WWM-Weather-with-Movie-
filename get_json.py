import json
import requests
from pprint import pprint
totla_data = []
pk = 961
page = 51
for _ in range(2):
    URL = 'https://api.themoviedb.org/3/discover/movie'
    params = {
        'include_adult' : 'false',
        'include_video' : 'false',
        'language' : 'ko-KR',
        'page' : page,
        'api_key' : 'b578f3012a550948ffff4885867d7cab'
    }

    movies = requests.get(URL,params=params).json()
    movie_data = movies['results']

    for movie in movie_data:
        data = {
            'model' : 'movies.movie',
            'pk' : pk,
            'fields' : {
                'movie_id' : movie['id'],
                'title' : movie['title'],
                'adult' : movie['adult'],
                'popularity' : movie['popularity'],
                'poster_path' : movie['poster_path'],
                'backdrop_path' : movie['backdrop_path'],
                'release_date' : movie['release_date'],
                'vote_average' : movie['vote_average'],
                'vote_count' : movie['vote_count'],
                'overview' : movie['overview'],
                'genres' : movie['genre_ids'],
            }
        }
        totla_data.append(data)
        pk += 1
    page += 1

# pprint(totla_data)
with open("movies2.json", "w", encoding="utf-8") as w:
    json.dump(totla_data, w, indent="\t", ensure_ascii=False)

