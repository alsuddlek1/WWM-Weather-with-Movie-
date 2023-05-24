<template>
  <div>
    <h1 class="fontcolor font">리뷰 수정</h1>
    <form @submit.prevent="updateReview">
        <label for="title" class="fontcolor font">제목 : </label>
        <input type="text" id="title" v-model.trim="title" class="review_size"><br>
        <label for="content" class="fontcolor font">내용 : </label>
        <textarea id="content" cols="30" rows="10" v-model="content" class="fontcolor font review_size"></textarea><br>
        <input type="submit" id="submit">
        <p @click="Back" class="mouse hover mt-3">뒤로 가기</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
    name: 'ReviewUpdata',
    computed: {
        isLogin() {
        return this.$store.getters.isLogin
        },
        movieId() {
            return this.$store.state.Movie.ReviewOfmovie
        },
        Review() {
            return this.$store.state.Movie.Review
        },           
    },
    data() {
        return {
            title : this.$store.state.Movie.Review.title,
            content : this.$store.state.Movie.Review.content
        }
    },
    methods: {
        searchMovieId() {
        this.$store.dispatch('searchMovieId',this.$route.params.reviewId)
        },
        updateReview() {
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
                method: 'put',
                url: `${API_URL}/movies/${this.movieId}/${this.$route.params.reviewId}/`,
                data: {title, content},
                headers: {
                    Authorization: `Token ${this.$store.state.accounts.token}`
                }
            })
            .then(() => {
                this.$router.push({name:'MovieDetail', params: {movie_id : this.movieId}})
            })
            .catch(err => console.log(err))
        },
        Back() {
        this.$router.push({name:'ReviewItem', params: {'reviewId' : this.$route.params.reviewId}})
        }
    },
    created() {
        this.searchMovieId()   
    }
    
}
</script>

<style>

</style>