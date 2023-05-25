<template>
<div class="fontcolor font">
  <br>
  <h3>TODAY MOVIE</h3>
  <h5>오늘의 추천 영화 ☺</h5>
  <br>
    <div class="card bg-body bg-opacity-10 mb-3" style="max-width: 800px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-if="movies" :src="url" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
          <div class="card-body m-5">
            <br>
            <h5 class="card-title">{{movies.title}}</h5>
            <br>
            <p class="card-text" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movies.overview}}</p>
            <p class="card-text">{{movies.vote_average}}</p>
            <p class="card-text">{{movies.release_date}}</p>
          </div>
        </div>
      </div>
    </div>
<!-- 
  <div class="row row-cols-1 row-cols-sm-3 g-2">
  <div class="container">
    <div class="row">
    <div class="card mouse bg-body bg-opacity-10 p-3 randomCard" @click="goDetail(movies)">
      <img v-if="movies" :src="url" class="card-img-top randomImg">
        <div class="card-body">
        <h5 v-if="movies" class="card-title fontcolor font">{{movies.title}}</h5>
        <br>
        <div v-if="movies" class="card-text fontcolor font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movies.overview}}</div>
        <br>
        <div v-if="movies" class="card-text fontcolor font"> 평점 : {{movies.vote_average}}</div>
        <div v-if="movies" class="card-text fontcolor font">개봉 일자 : {{movies.release_date}}</div>
      </div>  
    </div>
    </div>    
  </div>
  </div> -->
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
      goDetail(movies) {
        this.$router.push({name:'MovieDetail', params: {movie_id: movies.id}})
      },
      Down() {
        window.scrollTo(0,500)
      }
    },
    created() {
      this.Down()
    }
    
}
</script>

<style>
  img:empty{
    background-image: url('@/assets/gkdka.png');
    background-repeat : no-repeat;
    background-size : 100%;
  }


</style>