<template>
  <div class="container">
    <br>
    <h3>LIKED MOVIE</h3>
    <h5><small>좋아요한 영화를 확인해보세요</small></h5>
    <br>
    <div class="container">
    <div class="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1">
    <LikeMovieItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LikeMovieItem from '../components/LikeMovieItem.vue'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'LikeMovieView',
    components: {
        LikeMovieItem
    },
    computed : {
        movies() {
            return this.$store.state.Movie.movieLikeList
        }
    },
    methods: {
        getLikeMovie() {
            axios({
                method: 'get',
                url: `${API_URL}/movies/recommend/${this.$store.state.accounts.userpk}/like/`,
                headers: {
                    Authorization: `Token ${this.$store.state.accounts.token}`
                }
            })
            .then(res => {
                this.$store.dispatch('getLikeMovie',res.data)
            })
            .catch(err => console.log(err))
        }
    },
    created() {
        this.getLikeMovie()
    }
}
</script>

<style>

</style>