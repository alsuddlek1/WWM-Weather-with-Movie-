<template>
  <div>
    <router-link :to="{name:'ReviewItem', params:{reviewId : reviewItem.id}}"  class="fontcolor hover font"> ▪ {{reviewItem.title}}</router-link><br>    
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

</style>