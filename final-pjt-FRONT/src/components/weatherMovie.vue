<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'weatherMovie',
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