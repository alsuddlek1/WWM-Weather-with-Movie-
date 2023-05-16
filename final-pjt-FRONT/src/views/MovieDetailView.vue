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
  </div>
</div>    
  <ReviewDetail v-for="review in reviews" :key="review.id" :review-item="review"/>
</div>

</template>

<script>
import ReviewDetail from '../components/ReviewDetail.vue'

export default {
    name: 'MovieDetailView',
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