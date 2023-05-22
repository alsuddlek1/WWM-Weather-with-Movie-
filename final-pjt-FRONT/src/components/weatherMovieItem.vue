<template>
  <div class="container padding">
  <div class="row">
    <div class="card mouse bg-body bg-opacity-10" @click="goDetail(movie)">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title font">{{movie.title}}</h3>
        </div>  
    </div>
  </div>    
</div>
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