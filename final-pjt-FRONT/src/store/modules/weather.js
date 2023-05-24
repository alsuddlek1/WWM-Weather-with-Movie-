import axios from "axios"


const API_URL = 'http://127.0.0.1:8000'
const weather = {
    state: {
      weather: null,
      movies: null,
      local : null
    },
    getters: {
    },
    mutations: {
      GET_MOVIE_WEATHER(state, payload) {
        state.weather = payload.weather
        state.movies = payload.result
        state.local = payload.local_name
      }
    },
    actions: {
      getMovieWeather(context, data) {
        axios({
          method : 'get',
          url: `${API_URL}/movies/recommend/weather/${data.lat}/${data.lon}/`,
        })
        .then((res) => {
          // console.log(res)
          // console.log(res.data)
          context.commit('GET_MOVIE_WEATHER', res.data)
        })
        .catch(err => console.log(err))
      }
    },
}

export default weather