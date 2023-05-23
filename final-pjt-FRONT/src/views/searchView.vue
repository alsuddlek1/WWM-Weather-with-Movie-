<template>
<div>
    <br>
    <h3>SEARCH</h3>
    <h5>보고 싶은 영화를 직접 검색해보세요</h5>
    <br>
  <div class="searchsize">
    <div class="inputsize">
    <input placeholder="리 띄우고 신 안해도 됨" type="text" @input="changedata" @keyup="detectMovie" m-3>
    </div>
    <div v-for="movie in movies" :key="movie.id">
            <div class="m-3 mouse" @click="goDetail(movie)">
            <p class="card-title font">{{movie.title}}</p>
            </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'searchView',
    data () {
        return {
            inputdata : ""
        }
    },
    computed: {
        movies() {
            return this.$store.state.Movie.searchMovie
        }
    },
    methods: {
        changedata(e){
            this.inputdata = e.target.value
        },
        detectMovie() {
            this.$store.dispatch('detectMovie',this.inputdata) 

        },
        goDetail(movie) {
            this.$router.push({name:'MovieDetail', params: {movie_id: movie.id}})
        },

        moviesnull() {
            this.$store.dispatch('moviesnull')
        }

    },
    created() {
        this.moviesnull()
    }

}
</script>

<style>
    .searchsize {
        width: 1000px;
    }

    .inputsize{
        width: 300px;
        margin-left: auto;
        margin-right: auto;
    }

</style>