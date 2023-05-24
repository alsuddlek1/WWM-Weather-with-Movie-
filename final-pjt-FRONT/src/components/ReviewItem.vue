<template>
  <div class="fontcolor font">
    <br>
    <br>
    <div class="border border-2 rounded border_size">

    <h5> 내용 </h5>
    <hr>
     <h5> {{content}}</h5>
    <br>
    <br>
    
    <div class="border border-1 rounded border_size2">
    <h5>댓글</h5>
    <hr>
    <CommentItem v-for="comment in Comments" :key="comment.id" :comment="comment"/>
    <button @click="GoComment" class="button_mg">댓글 작성</button>
    </div>
    </div>
    <br>
    <button v-if="userConfig" @click="goUpdateReview" class="button_mg">리뷰 수정</button>
    <button v-if="userConfig" @click="deleteReview" class="button_mg">리뷰 삭제</button>
    <br>
    <br>
    <p @click="Back" class="mouse hover">뒤로 가기</p>
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
      },

      Back() {
        this.$router.push({name:'MovieDetail', params: {'movie_id' : this.movieId}})
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
.border_size{
  width: 800px;
  height: auto;
  padding: 20px;
}

.border_size2{
  width: 750px;
  padding: 10px;
}
</style>