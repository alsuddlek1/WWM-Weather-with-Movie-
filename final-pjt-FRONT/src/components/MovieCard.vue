<template>
  <div class="col">
    <div class="card mouse bg-body bg-opacity-10" @click="goDetail(movieItem)">
      <img :src="url" class="card-img-top">
      <div class="card-body">
      <h5 class="card-title font">{{movieItem.title}}</h5>
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
    computed: {
      isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
      goDetail(movieItem) {
        if (this.isLogin) {
          this.$router.push({name:'MovieDetail', params: {movie_id: movieItem.id}})
        } else {
          alert('로그인이 필요한 서비스 입니다')
          this.$router.push({name:'LoginView'})
        }
      }
    }
}
</script>

<style>
 
</style>