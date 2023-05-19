<template>
  <div id="header">
    <div class="logo">
      <router-link :to="{name : 'MovieMainView'}">
        <!-- 메인 페이지로 이동 -->
        <span class="icon fa-gem logoline"></span> 
      </router-link>
    </div>
    <div class="content">
      <div class="inner">
        <h1>Dimension</h1>
        <p v-if="isLogin === false" class="logoline">
        ---의 서비스를 이용할 준비가 되셨나요? 그렇다면
        <router-link class="line" :to="{name : 'LoginView'}">로그인</router-link>을 하세요 !
        </p>
        <p v-if="isLogin === false" class="logoline">
        회원이 아니라면 
        <router-link class="line" :to="{name : 'signUpView'}">여기</router-link>를 통해
        <router-link class="line" :to="{name : 'signUpView'}">회원가입</router-link>을 하세요
        </p>

        <p v-if="isLogin !== false">
          <router-link class="line" :to="{name : 'MovieMainView'}" @click.native="logOut">logOut</router-link>
        </p>
      </div>
    </div>
    <nav v-if="isLogin !== false">
      <ul>
        <li><a href="#intro" class="line">INTRO</a></li>
        <li><router-link class="line" :to="{name : 'randomRecommend'}">TODAY MOVIE</router-link></li>
        <li><router-link class="line" :to="{name : 'movies'}">MOVIE LIST</router-link></li>
        <li><router-link class="line" :to="{name : 'PopularMovie'}">POPULAR MOVIE</router-link></li>
        <li><router-link class="line" :to="{name : 'LikeMovie', params: {user: this.$store.state.accounts.userpk} }">LIKED MOVIE</router-link></li>

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
  .line {
    text-decoration: none;
    color: white;
  }
  .line:hover {
    background-color: gray;
    color: white;
    transition: 0.5s;
  }

  .logoline{
    text-decoration: none;
    color: white;
  }


</style>
