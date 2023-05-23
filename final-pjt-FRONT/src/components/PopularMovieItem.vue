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
  <div class="card text-bg-dark bg-opacity-10">
  <img :src="url" class="card-img padding">
  <div class="card-img-overlay">
    <h5 class="card-title padding">{{movie.title}}</h5>
    <!-- <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p> -->
    <p class="card-text"><small>{{movie.release_date}}</small></p>
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
.padding {
  padding: 10px 10px 10px;
}

</style>