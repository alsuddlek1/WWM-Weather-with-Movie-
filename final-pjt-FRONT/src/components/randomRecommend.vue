<template>
<div class="row row-cols-1 row-cols-sm-3 g-2">
<div class="container">
  <div class="row">
  <div class="card mouse bg-body bg-opacity-10" @click="goDetail(movies)">
    <img :src="url" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title fontcolor font">{{movies.title}}</h5>
      <div class="card-text fontcolor font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movies.overview}}</div>
      <div class="card-text fontcolor font">{{movies.vote_average}}</div>
      <div class="card-text fontcolor font">{{movies.release_date}}</div>
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
    },
    methods: {
      getMovieList() {
        this.$store.dispatch('getMovieList')
      },
      goDetail(movies) {
        this.$router.push({name:'MovieDetail', params: {movie_id: movies.id}})
      }
    },
    created() {
      this.getMovieList()
    }
}
</script>

<style>
.mouse{
    cursor: pointer;
  }
</style>