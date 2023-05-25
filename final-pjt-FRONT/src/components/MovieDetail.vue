<template>
<div class="container">
  <div class="row">
    <div class="card bg-body bg-opacity-10 p-3">
      <!-- <img :src="url" class="card-img-top"> -->
      <img :src="`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`"  class="card-img-top">
        <div class="card-body">
          <h5 class="card-title fontcolor font">{{movie.title}}</h5>
          <br>
          <div class="card-text fontcolor font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movie.overview}}</div>
          <br>
          <div class="card-text fontcolor font"> 평점 : {{movie.vote_average}}</div>
          <div class="card-text fontcolor font"> 개봉일자 : {{movie.release_date}}</div>
        </div> 
      <br>
      <!-- <p @click="Like" :class="{'buttonColor':is_liked}">♥</p> {{LikeCount}} -->
      <div class="buttonsize ">
      <h5 @click="Like" :class="{'buttonColor':is_liked}" class="mouse notclikck border rounded"><small>♥ {{LikeCount}}</small></h5> 
      </div>
    </div>
  </div>
  <br>
  <div class="border border-2 rounded p-3">
    
  <h5 class="fontcolor font">▶ 리 뷰 목 록 ◀</h5>
  <br>
  <ReviewDetail v-for="review in reviews" :key="review.id" :review-item="review" />
  <br>
  <hr>
  <br>
  <button @click="onClick" class="m-2">리뷰 생성</button>
  <button @click="goList" class="m-2">목록보기</button>
  </div>
</div>

</template>

<script>
import ReviewDetail from './ReviewDetail.vue'
// import axios from "axios"
// const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'MovieDetail',
    data() {
      return {
        movie_id : this.$route.params.movie_id,
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
      },
      LikeCount() {
        return this.$store.state.Movie.LikeCount
      },
      is_liked() {
        return this.$store.state.Movie.LikeTorF
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
        const userpk = this.$store.state.accounts.userpk
        const movieId = this.movie_id
        const data = {
          userpk, movieId
        }
        this.$store.dispatch('Like',data)
      },
      onClick() {
        this.$router.push({name:'ReviewCreate', params:{reviewId : this.movie.id}})
      },
      goList() {
        this.$router.push({name:'movies'})
      }
    },
    created() {
      this.getMovieDetail()
      this.getReview()
      // this.LikeCount = this.movie.like_users.length
    }
} 
</script>

<style>
  .buttonColor{
    /* color: brown; */
    /* border-color: brown; */
    /* outline-color: brown; */
    background-color: rgba(255, 255, 255, 0.274);
    transition: 0.5s;
    margin-left: auto;
    /* height: 50px; */
    width: 100px;
  }

  .notclikck{
    margin-left: auto;
    transition: 0.5s;
    /* height: 28px; */
    width: 80px;
  }
  .notclikck:hover{
    background-color: rgba(255, 255, 255, 0.274);
  }
  .buttonsize {
    width: 100%;
  }
  .flex {
    display: flex;
  }
  .buttonRight {
    justify-content: flex-end;
  }
  
</style>