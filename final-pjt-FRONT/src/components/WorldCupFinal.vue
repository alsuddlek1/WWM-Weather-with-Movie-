<template>
 <div>
  <div class="container worldcupsize">
  <div class="row row-cols-1 row-cols-md-1">
    <div class="col">
      <div class="card fontcolor mouse bg-body bg-opacity-10" @click="Godetail(movie)">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>     
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WorldCupFinal',
  computed: {
    movie() {
      return this.$route.params.movie
    }
  },
  methods: {
    Godetail(movie) {
      this.$router.push({name:'MovieDetail', params: {movie_id: movie.id}})
    }
  }
 }
</script>

<style>

</style>