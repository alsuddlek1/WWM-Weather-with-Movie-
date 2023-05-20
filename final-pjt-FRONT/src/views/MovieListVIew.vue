<template>
    <div>
        <br>
        <h3>당신의 취향을 찾아보세요!</h3>
        <br>
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-2">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie-item="movie"/>
        </div>
        <button class="mouse fontcolor font m-5" @click="getMovies">더보기</button>
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