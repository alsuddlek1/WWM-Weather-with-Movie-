<template>
  <div id="app">
    <nav class="navbar bg-body-tertiary ">
    <form class="container-fluid justify-content-center">
      <button class="btn btn-outline-success ms-3 me-3" type="button"><router-link :to="{name : 'MovieMainView'}">Main</router-link></button>
      <button class="btn btn-outline-success ms-3 me-3" type="button" v-if="isLogin === false"><router-link :to="{name : 'signUpView'}">signup</router-link> </button>
      <button class="btn btn-outline-success ms-3 me-3" type="button" v-if="isLogin === false"><router-link :to="{name : 'LoginView'}">logIn</router-link> </button>
      <button class="btn btn-outline-success ms-3 me-3" type="button" v-if="isLogin !== false"><router-link :to="{name : 'MovieMainView'}" @click.native="logOut">logOut</router-link></button> 
      </form>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
