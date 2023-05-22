<template>
  <div class="container padding">
    <div class="card text-bg-dark" @click="goDetail(movie)">
      <img :src="url" class="card-img-top">
      <div class="card-img-overlay">
        <h5 class="card-title">{{movie.title}}</h5>
        <p class="card-title">평점 : {{movie.vote_average}}</p>
      </div>
    </div>
    <!-- <div class="row">
      <div class="card mouse bg-body bg-opacity-10" @click="goDetail(movie)">
        <img :src="url" class="card-img-top">
          <div class="card-body">
            <h3 class="card-title font">{{movie.title}}</h3>
          </div>  
      </div>
    </div>     -->
  </div>

</template>

<script>
export default {
    name: 'PopularMovieItem',
    props : {
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
.padding {
  padding: 0px 500px 50px;
}
</style>