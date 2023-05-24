<template>
  <div class="fontcolor font button_mg button_size">
    <span>
      
    <p class="comment_size" style="display:inline">▶ {{comment.content}}</p>
    <p v-if="userConfig" @click="onClick(comment.id)" class="mouse ms-3 me-2 " style="display:inline">수정</p>
    <p v-if="userConfig" @click="deleteComment" class="mouse" style="display:inline">삭제</p>
    </span>

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
.comment_size{
  width: auto;
}
</style>