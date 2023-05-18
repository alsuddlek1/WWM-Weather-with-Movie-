<template>
<div class="row row-cols-1 row-cols-sm-3 g-2">
<div class="container">
  <div class="row">
  <div class="card ">
    <img :src="url" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title">{{movies.title}}</h5>
      <div class="card-text" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movies.overview}}</div>
      <div class="card-text">{{movies.vote_average}}</div>
      <div class="card-text">{{movies.release_date}}</div>
      <div class="card-text">{{movies.runtime}}</div>
    </div>  
  </div>
  </div>    
</div>
</div>

</template>

<script>
import _ from 'lodash'
export default {
    name: 'randomRecommend',
    computed: {
      movies() {
        return _.sample(this.$store.state.Movie.movieList)
      },
      url() {
      return `https://image.tmdb.org/t/p/original/${this.movies.poster_path}`
    },
    }
}
</script>

<style>

</style>