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
        }
    },
    methods: {
        getMovies() {
            this.$store.dispatch('getMovies')
        }
    },
    created() {
        this.getMovies()
    }
}
</script>

<style>

</style>