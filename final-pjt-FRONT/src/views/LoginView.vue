<template>
  <div>
    <h1>Sign Up Page</h1>
        <form @submit.prevent="login">
            <label for="username">username : </label>
            <input type="text" id="username" v-model="username">
            
            <label for="password1">password : </label>
            <input type="password" id="password" v-model="password1">
        
            <input type="submit" value="login">
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

</style>