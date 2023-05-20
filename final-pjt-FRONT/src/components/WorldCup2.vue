<template>
  <div>
    <h1>결승</h1>
    <p v-for="movie in TwoMovie" :key="movie.id" class="fontcolor mouse" @click="SelectMovie(movie)" >{{movie.title}}</p>

  </div>
</template>

<script>


export default {
  name:'WorldCup2',
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    }
  },
  methods : {
    getWorldCupMovie() {
      this.$store.dispatch('getWorldCupMovie6')
    },
    SelectMovie(movie) {
      this.$router.push({name:'WorldCupFinal', params: {movie:movie}})
    }  
  },
  created() {
    this.getWorldCupMovie()
  }
}
</script>

<style>

</style>