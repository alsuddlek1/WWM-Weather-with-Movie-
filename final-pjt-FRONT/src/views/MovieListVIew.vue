<template>
    <div>
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-2">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie-item="movie"/>
        </div>
    </div>
</template>

<script>

import MovieCard from '../components/MovieCard.vue'

export default {
    name: 'MovieListVIew',
    components: {
        MovieCard
    },
    computed: {
        movies() {
            return this.$store.state.Movie.movieList
        },
        isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
        getMovies() {
            this.$store.dispatch('getMovies')
        }
    },
    created() {
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