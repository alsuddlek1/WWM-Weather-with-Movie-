<template>
  <div>
    <br>
    <h3>FAVORITE MOVIE</h3>
    <br>
    <h5 @click="goWorldCup64" class="mouse border-bottom"><small class="line">▶ 64강 시작하기</small></h5>
 
    <br>
    <br>
    <p @click="goMain" class="mouse"><small class="line">메인으로 돌아가기</small></p>
  </div>
</template>

<script>
export default {
    naem: 'StartWorldCupView',
    methods: {
        goWorldCup64() {
            this.$router.push({name:'WorldCup64'})
        },
        goWorldCup32() {
            this.$router.push({name:'WorldCup32'})
        },
        goMain() {
            this.$router.push({name:'MovieMainView'})
        }

    }
}
</script>

<style>

</style>