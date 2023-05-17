<template>
  <div>
    <p>{{comment.content}}<router-link v-if="userConfig" :to="{name: 'CommentUpdate', params: {commentId : comment.id}}">댓글 수정</router-link></p>
  </div>
</template>

<script>
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
      }
    },
    created() {
      this.WhoAmI()
    }
}
</script>

<style>

</style>