<template>
  <div id="header" class="fontcolor font">
    <div class="mouse logo" @click="goMain">
        <h1 class="cloud">☁</h1>
        <span class="logoline"></span> 
    </div>
    <div class="content">
      <div class="inner">
        <h1 class="mouse" @click="goMain">WWM</h1>
        <p v-if="isLogin === false" class="logoline">
        WWM의 서비스를 이용할 준비가 되셨나요? 그렇다면
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
        <br>
        <p v-if="isLogin !== false" class="logoline">현재 위치 날씨 : {{weather}}</p>
        <p><small>Current Location City : {{local}}</small></p>
        <!-- <p v-if="isLogin !== false"><small>Current Location City : Gangseo-gu</small></p> -->
      </div>
    </div>
    <nav v-if="isLogin !== false">
      <ul class="ultag">
        <li><a href="/#intro" class="line">INTRO</a></li>
        <li><router-link class="line" :to="{name : 'randomRecommendView'}">TODAY</router-link></li>
        <li><router-link class="line" :to="{name : 'movies'}">LIST</router-link></li>
        <li><router-link class="line" :to="{name : 'PopularMovieView'}">POPULAR</router-link></li>
        <li><router-link class="line" :to="{name : 'weatherMovieView'}">WEATHER</router-link></li>
        <li><router-link class="line" :to="{name : 'StartWorldCupView'}">FAVORITE</router-link></li>
        <li><router-link class="line" :to="{name : 'LikeMovieView', params: {user: this.$store.state.accounts.userpk} }">LIKED</router-link></li>
        <li><router-link class="line" :to="{name : 'searchView'}">Search</router-link></li>
      </ul>
    </nav>
    <router-view/>
    
</div>
</template>


<script>
import Vue from 'vue'
import VueGeolocationApi from 'vue-geolocation-api'

Vue.use(VueGeolocationApi)
export default {
  name: 'App',
  data() {
    return {
      weather : null
    }
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    },
    weathers() {
      return this.$store.state.weather.weather
    },
    local() {
      return this.$store.state.weather.local
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('logOut')
    },
    getMovieWeather() {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const data = {lat, lon}
        this.$store.dispatch('getMovieWeather', data)
      })
    },
    getMovieList() {
        this.$store.dispatch('getMovieList')
      },
    goMain() {
      if(this.$route.name !== 'MovieMainView') {

        this.$router.push({name : 'MovieMainView'})
      } 
    }
    
  },

  created() {
    this.getMovieWeather()
    this.getMovieList()      

    
  },
  mounted() {
    if (this.weathers === 'Clouds') {
      this.weather = '흐림 ☁'
    } else if (this.weathers === 'Rain') {
      this.weather = '비 🌧'
    } else if (this.weathers === 'Thunderstorm') {
      this.weather = '번개 🌩'
    } else if (this.weathers === 'Drizzle') {
      this.weather = '이슬비 ☂'
    } else if (this.weathers === 'Snow') {
      this.weather = '눈 ☃'
    } else if (this.weathers === 'Atmosphere') {
      this.weather = '안개 🌫'
    } else if (this.weathers === 'Clear') {
      this.weather = '맑음 ☀'
    } 
  }
  
}
</script>

<style>
.scroll::-webkit-scrollbar {
  display: none;
}
  .ultag{
    margin-left: 7px;
  }
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
    font-size: 14px;
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

.cloud{
  margin-top: 25%;
  margin-left: 10%;
}
</style>
