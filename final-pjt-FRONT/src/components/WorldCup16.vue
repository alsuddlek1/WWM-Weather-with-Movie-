<template>
  <div>
    <h1>16강</h1>
    <p v-for="movie in TwoMovie" :key="movie.id" class="fontcolor mouse" @click="SelectMovie(movie)" >{{movie.title}}</p>
  </div>
</template>

<script>
export default {
  name:'WorldCup16',
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    }
  },
  methods : {
    getWorldCupMovie() {
      this.$store.dispatch('getWorldCupMovie3')
    },
    SelectMovie(movie) {
      this.$store.dispatch('SelectMovie3', movie)
    }  
  },
  created() {
    this.getWorldCupMovie()
  }
}
</script>

<style>

</style>