<template>
  <div>
    <h1>{{weather}} 영화 추천~~</h1>
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-1">
    <weatherMovieItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </div>
  </div>
</template>

<script>
import weatherMovieItem from '../components/weatherMovieItem.vue'
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
      this.$store.dispatch('getMovieWeather')
    }
  },
  created() {
    this.getMovieWeather()

    if (this.weathers === 'Clouds') {
      this.weather = '흐린 날'
    } else if (this.weathers === 'Rain') {
      this.weather = '비 오는 날'
    } else if (this.weathers === 'Thunderstorm') {
      this.weather = '번개치는 날'
    } else if (this.weathers === 'Drizzle') {
      this.weather = '이슬비 내리는 날'
    } else if (this.weathers === 'Snow') {
      this.weather = '눈 오는 날'
    } else if (this.weathers === 'Atmosphere') {
      this.weather = '안개 낀 날'
    } else if (this.weathers === 'Clear') {
      this.weather = '맑은 날'
    } 
  }
}
</script>

<style>

</style>