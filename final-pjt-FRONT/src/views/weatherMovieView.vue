<template>
  <div>
    <h1>{{weather}}한 날 영화 추천~~</h1>
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
  computed : {
    movies () {
      return this.$store.state.weather.movies
    },
    weather() {
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
  }
}
</script>

<style>

</style>