<template>
    <div>
        <h1>SIGN UP PAGE</h1>
        <form @submit.prevent="signUp">
            <label for="username">username : </label>
            <input type="text" id="username" v-model="username" class="sign font">
            
            <label for="password1" class="mt-3">password : </label>
            <input type="password" id="password1" v-model="password1" class="sign font">
            
            <label for="password2" class="mt-3">password confirmation : </label>
            <input type="password" id="password2" v-model="password2" class="sign font">
            
            <input type="submit" value="signUp" class="mt-4">
        </form>
    </div>
</template>

<script>
export default {
    name: 'signUpView',
    data() {
        return {
            username : null,
            password1 : null,
            password2 : null
        }
    },
    methods: {
        signUp() {
            const username = this.username
            const password1 = this.password1
            const password2 = this.password2

            const payload = {
                username, password1, password2
            }
            this.$store.dispatch('signUp', payload)
        }
    }
}
</script>

<style>

</style>