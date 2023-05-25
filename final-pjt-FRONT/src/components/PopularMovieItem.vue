<template>
<div class="col">
  <div class="container_size">
    <div class="mouse text-bg-dark bg-opacity-10"  @click="goDetail(movie)">
      <figure class="snip1384">
      <img :src="url" class="card-img">
      <figcaption>
        <h3>{{movie.title}}</h3>
        <br>
        
        <p>{{movie.overview}}</p>
        <p>{{movie.release_date}}</p>
      </figcaption>
      <!-- <a href=""></a> -->
      </figure>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'PopularMovieItem',
    props : {
        movie : Object
    },
    computed : {
        url() {
        return `https://image.tmdb.org/t/p/original/${this.movie.backdrop_path}`
        }
    },
    methods: {
      goDetail(movie) {
        this.$router.push({name:'MovieDetail', params: {movie_id: movie.id}})
      }
    }
}
</script>

<style>

.popular_card{
  padding: 1px;
  margin: 20px;
}


figure.snip1384 {
  position: relative;
  overflow: hidden;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  background-color: #000000;
}

figure.snip1384 * {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


figure.snip1384:after,
figure.snip1384 figcaption {
  content: ''; 
  display: block;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  border: 1px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  margin: auto; 
  opacity: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

/* 배경 어둡게 */
figure.snip1384:after {
  content: '';
  background-color: rgba(0, 0, 0, 0.65);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  opacity: 0;
}

figure.snip1384 figcaption {
  z-index: 1;
  padding: 40px;
}

figure.snip1384 h3
 {
  width: 100%;
  margin: 5px 0;
  padding: 0;
  line-height: 1.1em;
  font-weight: 700;
  font-size: 1.4em;
  text-transform: uppercase;
  opacity: 0;
}

figure.snip1384 p {
  font-size: 0.8em;
  font-weight: 300;
  letter-spacing: 1px;
  opacity: 0;
  top: 50%;
  -webkit-transform: translateY(40px);
  transform: translateY(40px);
}

figure.snip1384 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

figure.snip1384:hover img{
  zoom: 1;
  filter: alpha(opacity=50);
  -webkit-opacity: 0.5;
  opacity: 0.5;
}

figure.snip1384:hover:after {
  opacity: 1;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

figure.snip1384:hover h3,
figure.snip1384:hover h5,
figure.snip1384:hover p,
figure.snip1384:hover figure,
figure.snip1384:hover figcaption
{
  -webkit-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
  opacity: 1;
}

</style>