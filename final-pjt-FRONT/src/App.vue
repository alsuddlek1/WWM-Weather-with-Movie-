<template>
  <div id="header" class="fontcolor font">
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

.fontcolor{
    color: white;
    text-decoration: none;
  }

.hover {
  
  /* background-color: gray; */
  color: white;
  transition: 0.5s;
}

.hover:hover{
  text-decoration: none;
  color: white;
  transition: 0.5s;
}

/* button 에서 대문자, 가운데 정렬 없는 style */
.sign {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background-color: transparent;
  border-radius: 4px;
  border: 0;
  box-shadow: inset 0 0 0 1px #ffffff;
  color: #ffffff !important;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 300;
  height: 2.75rem;
  letter-spacing: 0.2rem;
  line-height: 2.75rem;
  outline: 0;
  padding: 0 1.25rem 0 1.35rem;
  text-decoration: none;
  white-space: nowrap;
}

@font-face {
  font-family: 'Gowun Dodum';
  src: url('@/assets/GowunDodum-Regular.ttf');
  }

.font {
    font-family: 'Gowun Dodum';
  }

/* mouse 올렸을 때 커서 생김 */
.mouse{
    cursor: pointer;
  }

/* 자동 적용돼서 지우면 안됨 !  */
input[type="submit"],
input[type="reset"],
input[type="button"],
button,
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  appearance: none;
  -moz-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -webkit-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  -ms-transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  background-color: transparent;
  border-radius: 4px;
  border: 0;
  box-shadow: inset 0 0 0 1px #ffffff;
  color: #ffffff !important;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 300;
  height: 2.75rem;
  letter-spacing: 0.2rem;
  line-height: 2.75rem;
  outline: 0;
  padding: 0 1.25rem 0 1.35rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
}

.button_mg {
  margin : 10px;
}
</style>
