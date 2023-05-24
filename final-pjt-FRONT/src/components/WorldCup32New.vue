<template>
<div>
  <h1>32강</h1>
  <h3>{{count}}/16</h3>
  <div class="container worldcupsize">
  <div class="row row-cols-2 row-cols-md-2">
    <div class="col" v-for="movie in TwoMovie" :key="movie.id"  @click="SelectMovie(movie)">
      <div class="card fontcolor mouse bg-body bg-opacity-10 worldcup">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top worldcupImgsize worldcup_box" >
        <div class="card-body cardTitle">
        <p class="worldcupcardTitle font " style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">{{movie.title}}</p>     
        </div>
      </div>
    </div>
  </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name : 'WorldCup32New',
    data() {
        return {
        count : 1
            }
    },
    computed: {
        TwoMovie() {
        return this.$store.state.WorldCup.worldTwoMovie
        },
        url() {
        return `https://image.tmdb.org/t/p/original`
        },
        isLogin() {
            return this.$store.getters.isLogin
        }
    },
    methods: {
        getWorldCupMovie32() {
            axios({
                method: 'get',
                url: `${API_URL}/movies/recommend/worldcup/`
                })
                .then(res => {
                    this.$store.dispatch('getWorldCupMovie32',res.data)
                })
                .catch(err => console.log(err))
        },
        SelectMovie(movie) {
            this.count += 1
            this.$store.dispatch('SelectMovie2', movie)
        }  
    },
    created() {
        this.count = 1
        if (this.isLogin) {
        this.getWorldCupMovie32()
        } else {
        alert('로그인이 필요한 서비스 입니다')
        this.$router.push({name:'LoginView'})
        }
    }
}
</script>

<style>

</style>