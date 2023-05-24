<template>
  <div>
    <br>
    <div>

    <h3>FAVORITE MOVIE</h3>
    <h5><small>영화 월드컵을 통해 가장 좋아하는 영화를 찾아보세요</small></h5>
    </div>
    <br>

    <div class="border_size_wc">
        <span class="border_size_wc2">
    <h5 @click="goWorldCup" class="mouse border-bottom line"><small>▶ 64강 시작하기</small></h5>
    <h5 @click="goWorldCup32" class="mouse border-bottom line"><small>▶ 32강 시작하기</small></h5>
        </span>
    </div>
 
    <br>
    <br>
    <p @click="goMain" class="mouse"><small class="line">메인으로 돌아가기</small></p>
  </div>
</template>

<script>
export default {
    naem: 'StartWorldCupView',
    methods: {
        goWorldCup() {
            this.$router.push({name:'WorldCup64'})
        },
        goWorldCup32() {
            this.$router.push({name:'WorldCup32New'})
        },
        goMain() {
            this.$router.push({name:'MovieMainView'})
        }

    }
}
</script>

<style>
.border_size_wc{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.border_size_wc2{
    width: 300px;
}
</style>