<template>
<div class="container">
  <div class="row">
    <div class="card ">
      <img :src="url" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{movie.title}}</h5>
          <div class="card-text" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movie.overview}}</div>
          <div class="card-text">{{movie.vote_average}}</div>
          <div class="card-text">{{movie.release_date}}</div>
          <div class="card-text">{{movie.runtime}}</div>
        </div> 
      <button @click="Like">좋아요</button>   
    </div>
  </div>    
  <ReviewDetail v-for="review in reviews" :key="review.id" :review-item="review"/>
  <router-link :to="{name:'ReviewCreate', params:{reviewId : movie.id}}">리뷰 생성</router-link>
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
      }
    },
    created() {
      this.getMovieDetail()
      this.getReview()
    }
} 
</script>

<style>
  .size{
    display: flex;
    align-content: center;
    justify-content: center;
    width: 500px;
    height: 500px;
  }
</style>