<template>
  <div>
    <h1>댓글 작성</h1>
    <form @submit.prevent="createComment">
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content"></textarea><br>
      <input type="submit" id="submit">
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
            .catch(err => console.log(err)) 

        }
    }
}
</script>

<style>

</style>