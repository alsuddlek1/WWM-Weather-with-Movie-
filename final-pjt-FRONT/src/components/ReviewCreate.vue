<template>
  <div class="fontcolor font">
    <br>
    <h3>리뷰 작성</h3>
    <br>
    <form @submit.prevent="createReview">
      <label for="title">제목 : </label>
      <input type="text" id="title" v-model.trim="title" class="review_size"><br>
      <label for="content">내용 : </label>
      <textarea id="content" cols="30" rows="10" v-model="content" class="review_size"></textarea><br>
      <input type="submit" id="submit">
      <p @click="Back" class="mouse hover mt-3">뒤로 가기</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'ReviewCreate',
    data() {
        return {
            title : null,
            content : null
        }
    },
    computed: {
        isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
        createReview() {
            const title = this.title
            const content = this.content

            if (!title) {
                alert('제목을 입력해주세요')
                return
            } else if (!content){
                alert('내용을 입력해주세요')
                return
            }
            axios({
                method: 'post',
                url: `${API_URL}/movies/${this.$route.params.reviewId}/reviews/`,
                data: {title, content},
                headers: {
                    Authorization: `Token ${this.$store.state.accounts.token}`
                }

            })
            .then(() => {
                this.$router.push({name:'MovieDetail', params: {movie_id : this.$route.params.reviewId}})
            })
            .catch(err => console.log(err))         
        },


        Back() {
        this.$router.push({name:'MovieDetail', params: {'movie_id' : this.$route.params.reviewId}})
        }
    },
    created() {
        if (this.isLogin) {
            return
        } else {
        alert('로그인이 필요한 서비스 입니다')
        this.$router.push({name:'LoginView'})
        }   
    }
}
</script>

<style>
.review_size{
    width: 800px;
}
</style>