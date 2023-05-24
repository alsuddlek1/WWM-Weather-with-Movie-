<template>
  <div>
    <br>
    <h3>{{weather}} 이런 영화는 어때요?</h3>
    <h5><small>현재 위치 날씨에 어울리는 영화를 추천해드립니다</small></h5>
    <br>
    <div class="container">
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
    <weatherMovieItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
    </div>
  </div>
</template>

<script>
import weatherMovieItem from '../components/weatherMovieItem.vue'
import Vue from 'vue'
import VueGeolocationApi from 'vue-geolocation-api'

Vue.use(VueGeolocationApi)
export default {
  name: 'weatherMovieView',
  components: {
    weatherMovieItem
  },
  data() {
    return {
      weather : null,

    }
  },
  computed : {
    movies () {
      return this.$store.state.weather.movies
    },
    weathers() {
      return this.$store.state.weather.weather
    }
  },
  methods: {
    getMovieWeather() {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const data = {lat, lon}
        this.$store.dispatch('getMovieWeather', data)
      })
    }
  },
  created() {
    this.getMovieWeather()

    if (this.weathers === 'Clouds') {
      this.weather = '흐린 날🤔'
    } else if (this.weathers === 'Rain') {
      this.weather = '비☔ 오는 날'
    } else if (this.weathers === 'Thunderstorm') {
      this.weather = '천둥번개⚡치는 날'
    } else if (this.weathers === 'Drizzle') {
      this.weather = '이슬비💦 내리는 날'
    } else if (this.weathers === 'Snow') {
      this.weather = '눈⛄ 오는 날'
    } else if (this.weathers === 'Atmosphere') {
      this.weather = '안개 낀 날🧐'
    } else if (this.weathers === 'Clear') {
      this.weather = '맑은 날🌞'
    } 
  }
}
</script>

<style>

</style>