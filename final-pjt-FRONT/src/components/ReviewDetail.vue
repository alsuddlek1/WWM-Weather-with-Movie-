<template>
  <div>
    ▪ <router-link :to="{name:'ReviewItem', params:{reviewId : reviewItem.id}}" class="fontcolor font">{{reviewItem.title}}</router-link><br>    
  </div>
</template>

<script>

export default {
    name : 'ReviewDetail',
    props : {
        reviewItem: Object
    }, 
}
</script>

<style>
 .fontcolor{
    color: white;
    text-decoration: none;
  }
  
  @font-face {
    font-family: 'Gowun Dodum';
    src: url('@/assets/GowunDodum-Regular.ttf');
  }
  .font {
      font-family: 'Gowun Dodum'
  }
</style>