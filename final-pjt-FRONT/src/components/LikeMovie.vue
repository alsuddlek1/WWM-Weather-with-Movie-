<template>
  <div>
    <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-2">
    <LikeMovieItem v-for="movie in movies" :key="movie.id" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LikeMovieItem from './LikeMovieItem.vue'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'LikeMovie',
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