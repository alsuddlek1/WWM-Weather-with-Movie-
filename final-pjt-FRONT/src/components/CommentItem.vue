<template>
  <div>
    <p>댓글 : {{comment.content}}</p>
    <button v-if="userConfig" @click="onClick(comment.id)" class="fontcolor font">댓글 수정</button>
    <button v-if="userConfig" @click="deleteComment">댓글 삭제</button>
  </div>
</template>

<script>
// import axios from 'axios'

// const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'CommentItem',
    props: {
      comment: Object
    },
    data () {
      return {
        userConfig : null
      }
    },
    methods : {
      WhoAmI() {  
        if(this.comment.user === this.$store.state.accounts.userpk){
          this.userConfig = true
          return 
        } else {
          this.userConfig = false
          return 
        }
      },
      deleteComment() {
        const ReviewId = this.comment.review
        const CommentId = this.comment.id
        const data = {ReviewId, CommentId}
        this.$store.dispatch('deleteComment', data)
      },
      onClick(commentId) {
        this.$router.push({name: 'CommentUpdate', params: {commentId : commentId}})
      }
    },

    created() {
      this.WhoAmI()
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
    font-family: 'Gowun Dodum';
  }
</style>