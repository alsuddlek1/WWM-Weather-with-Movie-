<template>
  <!-- <div class="container padding">
    <div class="row">
      <div class="card mouse bg-body bg-opacity-10" @click="goDetail(movie)">
        <img :src="url" class="card-img-top p-3">
          <div class="card-body">
            <h3 class="card-title font">{{movie.title}}</h3>
            <h5 class="card-title font">{{movie.vote_average}}</h5>
          </div>  
      </div>
    </div>
  </div> -->
  <div class="col">

  <div class="container_size">
    <div class="card mouse text-bg-dark bg-opacity-10 popular_card" @click="goDetail(movie)">
      <img :src="url" class="card-img padding popular_imgSize">
      <div class="card-img-overlay">
        <h5 class="card-title padding">{{movie.title}}</h5>
        <p class="card-text"><small>{{movie.release_date}}</small></p>
  </div>
      </div>
  </div>
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
/* .container_size{
  margin: 8px;
  height: auto;
  width: 830px;
} */

.popular_card{
  padding: 1px;
  margin: 20px;
  /* height: auto; */
  /* width: 800px; */
}

/* .popular_imgSize {
  height: auto;
  width: 800px;
} */

</style>