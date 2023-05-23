<template>
  <div class="col">
    <div class="card mouse bg-body bg-opacity-10 cardSize" @click="goDetail(movieItem)">
      <img :src="url" class="card-img-top imgSize">
      <div class="card-body cardBodySize cardTitle">
      <p class="card-title font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">{{movieItem.title}}</p>
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
  .cardSize {
    width: auto;
    height: auto;
  }
  .imgSize {
    height: 450px;
    width: auto;
  }
  .cardBodySize {
    height: 40px;
  }
  .cardTitle {
    padding: 10px;
  }
</style>