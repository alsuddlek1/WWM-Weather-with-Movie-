<template>
  <div class="col">
    <div class="card mouse bg-body bg-opacity-10 cardSize detail" @click="goDetail(movieItem)">
      <a>
      <figure>
      <img :src="url" class="card-img-top imgSize">
      <figcaption>자세히보기</figcaption>
      </figure>
      </a>
      <div class="card-body cardBodySize cardTitle">
      <p class="card-title font" style="text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;">{{movieItem.title}}</p>
      </div>
    </div>
   </div>
</template>

<script>
export default {
    name: 'MovieCard',
    props: {
        movieItem : Object
    },
    data() {
      return {
        url: `https://image.tmdb.org/t/p/original/${this.movieItem.poster_path}`
      }
    },
    computed: {
      isLogin() {
        return this.$store.getters.isLogin
      }
    },
    methods: {
      goDetail(movieItem) {
        if (this.isLogin) {
          this.$router.push({name:'MovieDetail', params: {movie_id: movieItem.id}})
        } else {
          alert('로그인이 필요한 서비스 입니다')
          this.$router.push({name:'LoginView'})
        }
      }
    }
}
</script>

<style>
  .cardSize {
    height: auto;
    width: 300px;
  }
  .imgSize {
    height: 450px;
    width: auto;
  }
  .cardBodySize {
    height: 40px;
  }
  .cardTitle {
    padding: 10px;
  }
  .detail{
    overflow: hidden;
  }

  .detail a{
    display: block; /* 영역적용위해 사용 */
    height: 450px;
    width: 300px;
    overflow: hidden;
    position: relative; /* absolute의 기본기준은 body로 처리 - 현재 요소로 기준변경 */
    text-decoration-line : none !important;
}

  .detail figure{
  width: 100%; height: 100%;
}

  .detail figcaption{
  height: 450px;
    width: 300px;
  background-color: rgba(0,0,0,0.7);
  position: absolute; /* 이미지와 겹치게 처리 */
  top: 0; left: 0;
  color: #fff; text-align: center;
  line-height: 200px;
  opacity: 0; /* 처음엔 안보이고 */
  transition: 0.3s;
}

/* 상자 만들기 */
.detail figcaption:after{
  content: ''; 
  display: block;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border: 1px solid #fff;
  box-sizing: border-box;
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  margin: auto; 
}

.detail a:hover figcaption, .detail a:focus figcaption{
  /* 마우스를 올리면 보이게 처리 */
  opacity: 1;
}
</style>