<template>
  <div id="header">
    <div class="logo">
      <router-link :to="{name : 'MovieMainView'}">
        <!-- 메인 페이지로 이동 -->
        <span class="icon fa-gem"></span> 
      </router-link>
    </div>
    <div class="content">
      <div class="inner">
        <h1>Dimension</h1>
        <p v-if="isLogin === false">
        ---의 서비스를 이용할 준비가 되셨나요? 그렇다면
        <router-link :to="{name : 'LoginView'}">로그인</router-link>을 하세요 !
        </p>
        <p v-if="isLogin === false">
        회원이 아니라면 
        <router-link router-link :to="{name : 'signUpView'}">여기</router-link>를 통해
        <router-link router-link :to="{name : 'signUpView'}">회원가입</router-link>을 하세요
        </p>

        <p v-if="isLogin !== false">
          <router-link :to="{name : 'MovieMainView'}" @click.native="logOut">logOut</router-link>
        </p>
      </div>
    </div>
    <nav v-if="isLogin !== false">
      <ul>
        <li><a href="#intro">INTRO</a></li>
        <li><router-link :to="{name : 'randomRecommend'}">TODAY MOVIE</router-link></li>
        <li><router-link :to="{name : 'movies'}">MOVIE LIST</router-link></li>
        <li><router-link :to="{name : 'PopularMovie'}">POPULAR MOVIE</router-link></li>
        <li><router-link :to="{name : 'LikeMovie', params: {user: this.$store.state.accounts.userpk} }">LIKED MOVIE</router-link></li>

      </ul>
  
    </nav>
    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'App',
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    },
  },
  
}
</script>

<style>

</style>
