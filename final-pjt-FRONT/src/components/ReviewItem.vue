<template>
  <div>
    {{content}}
    <button @click="deleteReview">리뷰 삭제</button>
    <router-link :to="{name: 'ReviewUpdata', params: {reviewId : this.$route.params.reviewId}}">리뷰 수정</router-link>
  </div>
</template>

<script>
export default {
    name: 'RiviewItem',
    computed: {
      content() {
        return this.$store.state.Movie.reviewContent
      },
      isLogin() {
        return this.$store.getters.isLogin
      },
      movieId() {
        return this.$store.state.Movie.ReviewOfmovie
      }
    },
    methods: {
      getReviewContent() {
        if (this.isLogin) {
          this.$store.dispatch('getReviewContent', this.$route.params.reviewId)
        } else {
          alert('로그인이 필요한 서비스 입니다')
          this.$router.push({name:'LoginView'})
        }
      },

      searchMovieId() {
        this.$store.dispatch('searchMovieId',this.$route.params.reviewId)
      },

      deleteReview() {
        const ReviewId = this.$route.params.reviewId
        const movieId = this.movieId

        const data = {
          ReviewId, movieId
        }

        this.$store.dispatch('deleteReview',data)
      },

    },
    created() {
      this.getReviewContent()
      this.searchMovieId()
    }
}
</script>

<style>

</style>