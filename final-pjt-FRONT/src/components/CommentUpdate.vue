<template>
  <div class="fontcolor font">
    <h1>댓글 수정</h1>
    <form @submit.prevent="updateComment">
      <label for="content"> 👇수정할 내용을 입력하세요👇 </label> <br>
      <input id="content" v-model="content" class="sign" size="100"><br>
      <input type="submit" id="submit" class="mt-3">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'CommentUpdate',
    computed: {
        comment() {
            return this.$store.state.Movie.Comment
        },
    },
    data() {
        return {
            content : null
        }
    },
    
    methods: {
        serachReview() {
            this.$store.dispatch('serachReview', this.$route.params.commentId)
        },
        updateComment(){
            const content = this.content
            if (!content){
                alert('내용을 입력해주세요')
                return
            }
            axios({
                method: 'put',
                url: `${API_URL}/movies/${this.comment.ReviewId}/comments/${this.$route.params.commentId}/`,
                data: {content},
                headers: {
                    Authorization: `Token ${this.$store.state.accounts.token}`
                }
            })
            .then(() => {
                this.$router.push({name:'ReviewItem', params:{reviewId : this.comment.ReviewId}})
            }) 
            .catch(err => console.log(err))
        }
    },
    created() {
        this.serachReview()
    }
}
</script>

<style>

</style>