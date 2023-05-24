<template>
<div>
    <br>
    <h3>SEARCH</h3>
    <h5><small>원하는 영화 제목을 검색해보세요</small></h5>
    <br>
    <p class="m-3">👇검색어를 입력하세요👇</p>
  <div class="searchsize">
    <span class="inputsize">
    <input placeholder="리 띄우고 신 안해도 됨" type="text" @input="changedata" @keyup="detectMovie">
    </span>

  </div>
    <div v-for="movie in movies" :key="movie.id">
        <div class="m-3 mouse" @click="goDetail(movie)">
        <p class="card-title font">{{movie.title}}</p>
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
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .inputsize{
        width: 300px;
    }

</style>