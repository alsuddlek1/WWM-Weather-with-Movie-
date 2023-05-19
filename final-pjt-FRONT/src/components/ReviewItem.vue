<template>
  <div class="fontcolor font">
    <p> 내용 : {{content}}</p>
    <hr>
    <CommentItem v-for="comment in Comments" :key="comment.id" :comment="comment"/>
    <br>
    <button @click="GoComment" class="fontcolor font">댓글 작성</button>
    <button v-if="userConfig" @click="deleteReview" class="fontcolor font">리뷰 삭제</button>
    <button v-if="userConfig" @click="goUpdateReview" class="fontcolor font">리뷰 수정</button>
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
        userConfig : null,
        ReviewId : this.$route.params.reviewId
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

      GoComment(){
        this.$router.push({name:'CommentCreate', params:{reviewId : this.ReviewId}})
      },
      
      goUpdateReview() {
        this.$router.push({name: 'ReviewUpdata', params: {reviewId : this.ReviewId}})
      }

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
.fontcolor{
    color: white;
    text-decoration: none;
  }
  
@font-face {
  font-family: 'Gowun Dodum';
  src: url('@/assets/GowunDodum-Regular.ttf');
}
.font {
    font-family: 'Gowun Dodum'
  }
  
</style>