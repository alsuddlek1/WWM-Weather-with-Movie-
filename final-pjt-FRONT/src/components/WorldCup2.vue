<template>
<div>
  <h1>결승</h1>
  <h3>{{count}}/2</h3>
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


export default {
  name:'WorldCup2',
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    }
  },
  data() {
    return {
      count : 2
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