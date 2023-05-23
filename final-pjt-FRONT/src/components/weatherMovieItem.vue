<template>
  <!-- <div class="a">
    <div @click="goDetail(movie)" class="card mouse bg-body bg-opacity-10 cardSize">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="imgSize">
        
    </div>
  </div>     -->
  <div class="col a">
    <div class="card mouse bg-body bg-opacity-10 cardSize" @click="goDetail(movie)">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top imgSize">
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
.weather_size {
  padding: 1px;
}
.a img {
  transition: all 0.2s linear;
}
.a:hover img{
  transform: scale(1.1);
}
</style>