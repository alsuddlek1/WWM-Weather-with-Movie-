<template>
  <div>
    <br>
    <h3>POPULAR MOVIE</h3>
    <h5><small>🏆세계인에게 사랑받은 영화 top10🏆</small></h5>
    <br>
    <div class="container">
    <div class="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1">
    <PopularMovieItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PopularMovieItem from '../components/PopularMovieItem.vue'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'PopularMovieView',
    components: {
        PopularMovieItem
    },
    computed: {
        movies() {
            return this.$store.getters.popularMovie
        } 
    },
    methods: {
        getPopularMovie() {
            axios({
                method: 'get',
                url: `${API_URL}/movies/recommend/popular/`
            })
            .then(res => {
                this.$store.dispatch('getPopularMovie',res.data)
            })
            .catch(err => console.log(err))
        }
    },
    created() {
        this.getPopularMovie()
    }
}
</script>

<style>

</style>