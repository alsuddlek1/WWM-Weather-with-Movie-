<template>
<div class="col">
  <div class="container_size">
    <div class="card mouse text-bg-dark bg-opacity-10 popular_card" @click="goDetail(movie)">
      <img :src="url" class="card-img">
      <div class="card-img-overlay">
        <h3 class="card-titlepadding"><small class="text-bg-dark">{{movie.title}}</small></h3>
        <p class="cord-text"><small class="text-bg-dark">{{movie.release_date}}</small></p>
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

.popular_card{
  padding: 1px;
  margin: 20px;
}

</style>