<template>
  <div>
    {{content}}
    {{isLogin}}
  </div>
</template>

<script>
export default {
    name: 'RiviewItem',
    computed: {
      content() {
        return this.$store.state.Movie.reviewContent
      },
      isLogin() {
        return this.$store.getters.accounts.isLogin
      }
    },
    methods: {
      getReviewContent() {
        if (this.isLogin) {
          this.$store.dispatch('getReviewContent', this.$route.params.reviewId)
        } else {
          alert('로그인이 필요한 서비스 입니다')
          this.$router.push({name:'LoginView'})
        }
        
      }
    },
    created() {
      this.getReviewContent()
    }
}
</script>

<style>

</style>