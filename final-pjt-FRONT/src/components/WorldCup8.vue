<template>
<div>
  <h1>8강</h1>
  <h3>{{count}}/8</h3>
  <div class="container worldcupsize">
  <div class="row row-cols-2 row-cols-md-2">
    <div class="col" v-for="movie in TwoMovie" :key="movie.id"  @click="SelectMovie(movie)">
      <div class="card fontcolor mouse bg-body bg-opacity-10">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top worldcupImgsize" >
        <div class="card-body">
        <h5 class="card-title font">{{movie.title}}</h5>     
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
export default {
  name:'WorldCup8',
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    },
    isLogin() {
    return this.$store.getters.isLogin
    }
  },
    data() {
    return {
      count : 2
    }
  },
  methods : {
    getWorldCupMovie() {
      this.$store.dispatch('getWorldCupMovie4')
    },
    SelectMovie(movie) {
      this.count += 2
      this.$store.dispatch('SelectMovie4', movie)
    }  
  },
  created(){ 
    if (this.$store.state.WorldCup.worldcup8.length !== 8) {
      this.$router.push({name:'NotFound'})
    }
    this.count = 2
    if (this.isLogin) {
      this.getWorldCupMovie()
    } else {
      alert('로그인이 필요한 서비스 입니다')
      this.$router.push({name:'LoginView'})
    }
  }
}
</script>

<style>

</style>