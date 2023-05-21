<template>
<div>
  <h1>64강</h1>
  <h3>{{count}}/64</h3>
  <div class="container worldcupsize">
  <div class="row row-cols-2 row-cols-md-2">
    <div class="col" v-for="movie in TwoMovie" :key="movie.id"  @click="SelectMovie(movie)">
      <div class="card fontcolor mouse bg-body bg-opacity-10">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>     
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'
export default {
  name : 'WorldCup64',
  data() {
    return {
      count : 2
    }
  },
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    },
    url() {
      return `https://image.tmdb.org/t/p/original`
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
      this.count += 2
      this.$store.dispatch('SelectMovie', movie)
    }   
  },
  created(){
    this.count = 2
    this.getWorldCupMovie()
  }
}
</script>

<style>
 .worldcupsize{
  width: 50%; 
 }
</style>