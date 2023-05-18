<template>
<div class="container">
  <div class="row">
    <div class="card ">
      <img :src="url" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{movie.title}}</h5>
          <div class="card-text" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movie.overview}}</div>
          <div class="card-text">{{movie.vote_average}}</div>
          <div class="card-text">{{movie.release_date}}</div>
          <div class="card-text">{{movie.runtime}}</div>
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
    }
}
</script>

<style>

</style>