<template>
  <div>
    <br>
    <h3>월드컵 뭐라고하징</h3>
    <br>
    <h5 @click="goWorldCup" class="mouse border-bottom"><small class="line">▶ 영화 월드컵 64강</small></h5>
    <br>
    <h5 @click="goMain" class="mouse border-bottom"><small class="line">▶ 메인으로 돌아가기</small></h5>
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