<template>
  <div class="text-on-img">
    <div class="background-wrap">
      <div class="content">
        <span>안녕하세요</span>
        <!-- <img src="@/assets/main_movie2.jpg" class="image"> -->
      </div>
    </div>
        <router-link :to="{name : 'movies'}">영화 전체 리스트 보기</router-link><br>
        <router-link :to="{name : 'LikeMovie', params: {user: this.$store.state.accounts.userpk}}">내가 좋아요한 영화</router-link>
  </div>
</template>

<script>
export default {
    name: 'MovieMainView'
}
</script>

<style>
.background-wrap {
  width: 1900px;
  height: 800px;
  background-image: url('@/assets/main_movie2.jpg');
  background-size: cover;
  /* max-width: 100%;
  max-height: 100%; */
  justify-content: center;
  align-items: center;
}

.content{
  display: felx;
  flex-direction: column;
}

.content span{
  color: white;
}

.content span:nth-child(1){
  font-size: 25px;
  font-weight: bold;
}

.content span:nth-child(2){
  font-size: 20px;
}
</style>