<template>
<div class="container padding">
  <div class="row">
    <div class="card mouse bg-body bg-opacity-10" @click="goDetail(movie)">
      <img :src="url" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title font">{{movie.title}}</h3>

        </div>  
    </div>
  </div>    
</div>
</template>

<script>
export default {
    name: 'LikeMovieItem',
    props: {
        movie : Object
    },
    computed : {
        url() {
        return `https://image.tmdb.org/t/p/original/${this.movie.backdrop_path}`
        }
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