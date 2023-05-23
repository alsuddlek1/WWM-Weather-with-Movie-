<template>
<div class="col">
  <div class="container_size">
    <div class="card mouse popular_card" @click="goDetail(movie)">
      <img :src="url" class="card-img">
      <div class="card-img-overlay">
        <h3 class="card-titlepadding"><small>{{movie.title}}</small></h3>
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