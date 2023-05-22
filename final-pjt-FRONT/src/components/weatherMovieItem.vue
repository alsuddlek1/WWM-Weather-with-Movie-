<template>
  <!-- <div class="container padding"> -->
  <div class="col">
    <div @click="goDetail(movie)">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top">
        <div class="card-body">
        </div>  
    </div>
  </div>    
<!-- </div> -->
</template>

<script>
export default {
    name: 'weatherMovieItem',
    props : {
      movie : Object
    },
    methods: {
      goDetail(movie) {
        this.$router.push({name:'MovieDetail', params: {movie_id: movie.id}})
      }
    }

}
</script>

<style>

</style>