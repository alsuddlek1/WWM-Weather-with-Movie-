<template>
  <div>
    <p>{{comment.content}}<router-link v-if="userConfig" :to="{name: 'CommentUpdate', params: {commentId : comment.id}}">댓글 수정</router-link></p>
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
      }
    },

    created() {
      this.WhoAmI()
    }
}
</script>

<style>

</style>