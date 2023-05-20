<template>
  <div>
    <h1>32강</h1>
    <p v-for="movie in TwoMovie" :key="movie.id" class="fontcolor mouse" @click="SelectMovie(movie)" >{{movie.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'WorldCup32',
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    }
  },
  methods : {
    getWorldCupMovie() {
      this.$store.dispatch('getWorldCupMovie2')
    },
    SelectMovie(movie) {
      this.$store.dispatch('SelectMovie2', movie)
    }  
  },

  created() {
    this.getWorldCupMovie()
  }
}
</script>

<style>

</style>