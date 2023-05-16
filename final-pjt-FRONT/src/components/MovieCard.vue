<template>
  <div class="col">
    <div class="card mouse" @click="goDetail(movieItem)">
      <img :src="url" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title">{{movieItem.title}}</h5>
      <div class="card-text" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movieItem.overview}}</div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movieItem : Object
    },
    data() {
      return {
        url: `https://image.tmdb.org/t/p/original/${this.movieItem.poster_path}`
      }
    },
    methods: {
      goDetail(movieItem) {
        this.$router.push({name:'MovieDetailView', params: {movie_id: movieItem.id}})
      }
    }
}
</script>

<style>
  .mouse{
    cursor: pointer;
  }
</style>