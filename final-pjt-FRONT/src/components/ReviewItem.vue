<template>
  <div>
    {{content}}
    <button v-if="userConfig" @click="deleteReview">리뷰 삭제</button>
    <router-link v-if="userConfig" :to="{name: 'ReviewUpdata', params: {reviewId : this.$route.params.reviewId}}">리뷰 수정</router-link>

    <CommentItem v-for="comment in Comments" :key="comment.id" :comment="comment"/>
    <router-link :to="{name:'CommentCreate', params:{reviewId : this.$route.params.reviewId}}">댓글 작성</router-link>
  </div>
</template>

<script>
import CommentItem from './CommentItem.vue'

export default {
    name: 'RiviewItem',
    components: {
      CommentItem
    },
    data () {
      return {
        userConfig : null
      }
    },
    computed: {
      content() {
        return this.$store.state.Movie.reviewContent
      },
      isLogin() {
        return this.$store.getters.isLogin
      },
      movieId() {
        return this.$store.state.Movie.ReviewOfmovie
      },
      Comments() {
        return this.$store.state.Movie.CommentList
      },
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

      WhoAmI() {  
        if(this.$store.state.Movie.Review.userId === this.$store.state.accounts.userpk){
          this.userConfig = true
          return 
        } else {
          this.userConfig = false
          return 
        }
      },

      getComments() {
        this.$store.dispatch('getComments',this.$route.params.reviewId)
      },

    },
    created() {
      this.getReviewContent()
      this.searchMovieId()
      this.WhoAmI()
      this.getComments()
    }
}
</script>

<style>

</style>