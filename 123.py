import json
import requests
from pprint import pprint
URL = f'https://api.themoviedb.org/3/movie/{559682}/keywords'
params = {
        'api_key' : 'b578f3012a550948ffff4885867d7cab',
    }
movies = requests.get(URL,params=params).json()
print(movies)