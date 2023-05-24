<template>
 <div>
  <div class="container worldcupsize">
  <div class="row row-cols-1 row-cols-md-1">
    <div class="col">
      
      <div class="card fontcolor mouse bg-body bg-opacity-10" @click="Godetail(movie)">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`" class="card-img-top">
        <div class="card-body">
        <p class="worldcupcardTitle font " style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">{{movie.title}}</p>   
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
      return this.$store.state.WorldCup.worldcupFinal
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