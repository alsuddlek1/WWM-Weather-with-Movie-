<template>
  <div>
    <weatherMovieItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
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