<template>
  <div class="fontcolor font button_mg button_size">
    <p>댓글 : {{comment.content}}</p>
    <button v-if="userConfig" @click="onClick(comment.id)" class="button_mg">댓글 수정</button>
    <button v-if="userConfig" @click="deleteComment" class="button_mg">댓글 삭제</button>

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
</style>