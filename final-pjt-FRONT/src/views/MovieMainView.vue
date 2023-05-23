<template>
  <div>

  </div>
</template>

<script>
export default {
    name : 'MovieMainView',
    data() {
    return {
      weather : null,

    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    },
    weathers() {
      return this.$store.state.weather.weather
    },
    local() {
      return this.$store.state.weather.local
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    },
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
      this.weather = '흐림 ☁'
    } else if (this.weathers === 'Rain') {
      this.weather = '비 🌧'
    } else if (this.weathers === 'Thunderstorm') {
      this.weather = '번개 ⚡'
    } else if (this.weathers === 'Drizzle') {
      this.weather = '이슬비 🌂'
    } else if (this.weathers === 'Snow') {
      this.weather = '눈 ☃'
    } else if (this.weathers === 'Atmosphere') {
      this.weather = '안개 🌫'
    } else if (this.weathers === 'Clear') {
      this.weather = '맑음 🌞'
    } 
  }
}
</script>

<style>

</style>