<template>
<div class="container">
  <div class="row">
    <div class="card bg-body bg-opacity-10">
      <img :src="url" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title fontcolor font">{{movie.title}}</h5>
          <br>
          <div class="card-text fontcolor font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movie.overview}}</div>
          <br>
          <div class="card-text fontcolor font"> 평점 : {{movie.vote_average}}</div>
          <div class="card-text fontcolor font"> 개봉일자 : {{movie.release_date}}</div>
        </div> 
      <br>
      <button @click="Like">좋아요❤</button>   
    </div>
  </div>
  <br>
  <p class="fontcolor font"> ▶ 리 뷰 목 록 ◀ </p>
  <ReviewDetail v-for="review in reviews" :key="review.id" :review-item="review" />
  <br>
  <button @click="onClick" class="fontcolor font">리뷰 생성</button>
</div>

</template>

<script>
import axios from 'axios'
import ReviewDetail from './ReviewDetail.vue'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'MovieDetail',
    data() {
      return {
        movie_id : this.$route.params.movie_id,
        // movie : this.$store.state.Movie.movieDetail
      }
    },
    components: {
      // ReviewInDetail,
      ReviewDetail
    },
    computed : {
      movie() {
        return  this.$store.state.Movie.movieDetail
      },
      url() {
        return `https://image.tmdb.org/t/p/original/${this.$store.state.Movie.movieDetail.backdrop_path}`
      },
      reviews() {
            return this.$store.state.Movie.reviewList
        }
    },
    methods: {
      getMovieDetail() {
        this.$store.dispatch('getMovieDetail', this.movie_id)
      },
      getReview() {
        this.$store.dispatch('getReview', this.movie_id)
        },

      Like() {
        axios({
          method: 'post',
          url: `${API_URL}/movies/${this.$store.state.accounts.userpk}/${this.movie_id}/like/`,
          data: {
            user : this.$store.state.accounts.userpk,
            movie : this.movie_id
          },
          headers: {
              Authorization: `Token ${this.$store.state.accounts.token}`
            }
          })
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
      },
      onClick() {
        this.$router.push({name:'ReviewCreate', params:{reviewId : this.movie.id}})
      }
    },
    created() {
      this.getMovieDetail()
      this.getReview()
    }
} 
</script>

<style>
  
</style>