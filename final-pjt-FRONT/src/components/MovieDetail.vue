<template>
<div class="container">
  <div class="row">
    <div class="card bg-body bg-opacity-10">
      <img :src="url" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title font">{{movie.title}}</h5>
          <div class="card-text fontcolor font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden;">{{movie.overview}}</div>
          <div class="card-text fontcolor font">{{movie.vote_average}}</div>
          <div class="card-text fontcolor font">{{movie.release_date}}</div>
        </div> 
      <button @click="Like">좋아요❤</button>   
    </div>
  </div>    
  <p class="fontcolor font"> ▶ 리 뷰 목 록 ◀ </p>
  <ReviewDetail v-for="review in reviews" :key="review.id" :review-item="review" class="fontcolor font"/>
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
  .fontcolor{
    color: white;
    text-decoration: none;
  }
  
  .fontcolor:hover {
    /* background-color: gray; */
    color: white;
    transition: 0.5s;
  }
  
  @font-face {
    font-family: 'Gowun Dodum';
    src: url('@/assets/GowunDodum-Regular.ttf');
  }
  .font {
      font-family: 'Gowun Dodum'
  }
  
  input[type="submit"],
	input[type="reset"],
	input[type="button"],
	button,
	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		-ms-appearance: none;
		appearance: none;
		-moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
		background-color: transparent;
		border-radius: 4px;
		border: 0;
		box-shadow: inset 0 0 0 1px #ffffff;
		color: #ffffff !important;
		cursor: pointer;
		display: inline-block;
		font-size: 0.8rem;
		font-weight: 300;
		height: 2.75rem;
		letter-spacing: 0.2rem;
		line-height: 2.75rem;
		outline: 0;
		padding: 0 1.25rem 0 1.35rem;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
		white-space: nowrap;
	}
</style>