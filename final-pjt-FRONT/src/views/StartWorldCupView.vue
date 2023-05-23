<template>
  <div>
    <h1>월드컵ㄱㄱ</h1>
    <button @click="goWorldCup">응</button>
    <button @click="goMain">싫어</button>
  </div>
</template>

<script>
export default {
    naem: 'StartWorldCupView',
    methods: {
        goWorldCup() {
            this.$router.push({name:'WorldCup64'})
        },
        goMain() {
            this.$router.push({name:'MovieMainView'})
        }

    }
}
</script>

<style>

</style>