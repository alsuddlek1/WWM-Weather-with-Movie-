<template>
<div>
    <div>
        <br>
        <h3>ALL MOVIE LIST</h3>
        <h5><small>보고싶은 영화의 상세정보를 확인해보세요</small></h5>
        <br>
        <div class="container">
        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie-item="movie"/>
        </div>
        </div>
        <button class="mouse fontcolor font m-5" @click="getMovies">더보기</button>
    </div>
        <h3 @click="goTop" class="mouse" style="position: fixed; bottom: 10px; right:30px;">▲</h3>
</div>
</template>

<script>

import MovieCard from '../components/MovieCard.vue'

export default {
    name: 'MovieListVIew',
    components: {
        MovieCard
    },
    data() {
        return {
            ClickCnt : 0
        }
    },
    computed: {
        movies() {
            return this.$store.state.Movie.movieListPlus
        },
        isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
        getMovies() {
            this.ClickCnt ++
            this.$store.dispatch('getMovies', this.ClickCnt)
        },
        goTop() {
      window.scrollTo(0,0)
    }
    },
    created() {
        this.ClickCnt = 0
        if (this.isLogin) {
          this.getMovies()
        } else {
          alert('로그인이 필요한 서비스 입니다')
          this.$router.push({name:'LoginView'})
        }
        
    }
}
</script>

<style>


</style>