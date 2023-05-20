<template>
  <div>
    <p v-for="movie in TwoMovie" :key="movie.id" class="card fontcolor mouse bg-body bg-opacity-10" @click="SelectMovie(movie)" >{{movie.title}}</p>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'
export default {
  name : 'WorldCup64',
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    }
  },
  methods: {
    getWorldCupMovie() {
      axios({
          method: 'get',
          url: `${API_URL}/movies/recommend/popular/`
        })
        .then(res => {
            this.$store.dispatch('getWorldCupMovie',res.data)
        })
        .catch(err => console.log(err))
    },
    SelectMovie(movie) {
      this.$store.dispatch('SelectMovie', movie)
    }   
  },
  created(){
    this.getWorldCupMovie()
  }
}
</script>

<style>

</style>