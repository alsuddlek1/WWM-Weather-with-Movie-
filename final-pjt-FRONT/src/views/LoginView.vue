<template>
  <div>
    <h1>LOGIN PAGE</h1>
        <form @submit.prevent="login">
            <label for="username"  class="fontcolor font">username : </label>
            <input type="text" id="username" v-model="username" class="sign font">
            
            <label for="password1" class="fontcolor font mt-3">password : </label>
            <input type="password" id="password" v-model="password" class="sign font">
        
            <input type="submit" value="login" class="mt-4">
        </form>
  </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            username : null,
            password : null,
        }
    },
    methods: {
        login() {
            const username = this.username
            const password = this.password

            const payload = {
                username, password
            }
            this.$store.dispatch('login', payload)
        }
    }
}
</script>

<style>
/* input{
    width:500px;
} */
</style>