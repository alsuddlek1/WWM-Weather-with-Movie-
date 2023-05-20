import axios from "axios"
const API_URL = 'http://127.0.0.1:8000'
const weather = {
    state: {

    },
    getters: {
    },
    mutations: {

    },
    actions: {
      getMovieWeather(context) {
        axios({
          method : 'get',
          url: `${API_URL}/movies/recommend/weather/`,
          data: {
            weather : 'Clouds'
          }
        })
        .then((res) => {
          console.log(context)
          console.log(res)
        })
      }
    },
}

export default weather