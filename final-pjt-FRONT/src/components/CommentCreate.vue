<template>
  <div class="fontcolor font">
    <h1>댓글 작성</h1>
    <form @submit.prevent="createComment">
      <label for="content"> 👇댓글을 입력하세요👇 </label> <br>
      <input id="content" v-model="content" class="sign" size="100" placeholder="50글자 이내로 작성해 주세요.">
      <input type="submit" id="submit" class="ms-3">
      <p @click="Back" class="mouse hover mt-3">뒤로 가기</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'CommentCreate',
    data() {
        return {
            content: null
        }
    },

    computed: {
        isLogin() {
        return this.$store.getters.isLogin
        }
    },
    methods: {
        createComment() {
            const content = this.content
            if (!content){
                alert('내용을 입력해주세요')
                return
            }
            axios({
                method: 'post',
                url: `${API_URL}/movies/${this.$route.params.reviewId}/comments/`,
                data: {content},
                headers: {
                    Authorization: `Token ${this.$store.state.accounts.token}`
                }

            })
            .then(() => {
                this.$router.push({name:'ReviewItem', params: {reviewId : this.$route.params.reviewId}})
            })
            .catch(err => {
                console.log(err)
                alert('글자 수를 초과하였습니다.')
                this.content = null
            }) 

        },

        Back() {
        this.$router.push({name:'ReviewItem', params: {'reviewId' : this.$route.params.reviewId}})
        }
    }
}
</script>

<style>

</style>