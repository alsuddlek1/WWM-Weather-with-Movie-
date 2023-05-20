<template>
<div>
  <br>
  <h3>오늘의 추천 영화 ☺</h3>
  <br>
  <div class="row row-cols-1 row-cols-sm-3 g-2">
  <div class="container">
    <div class="row">
    <div class="card mouse bg-body bg-opacity-10" @click="goDetail(movies)">
      <img :src="url" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title fontcolor font">{{movies.title}}</h5>
        <br>
        <div class="card-text fontcolor font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movies.overview}}</div>
        <br>
        <div class="card-text fontcolor font"> 평점 : {{movies.vote_average}}</div>
        <div class="card-text fontcolor font">개봉 일자 : {{movies.release_date}}</div>
      </div>  
    </div>
    </div>    
  </div>
  </div>
  </div>
</template>

<script>
export default {
    name: 'randomRecommend',
    computed: {
      movies() {
        return this.$store.getters.random
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

</style>