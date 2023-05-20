<template>
  <div>
    <p v-for="movie in TwoMovie" :key="movie.id" class="fontcolor" @click="SelectMovie(movie)">{{movie}}</p>
    <!-- <WorldCupItem v-for="movie in TwoMovie" :key="movie.id" :movie="movie"/> -->
  </div>
</template>

<script>
import axios from 'axios'
// import WorldCupItem from './WorldCupItem.vue'
const API_URL = 'http://127.0.0.1:8000'
export default { 
  name : 'WorldCup64',
  // components: {
  //   WorldCupItem
  // },
  computed: {
    TwoMovie() {
      return this.$store.state.WorldCup.worldTwoMovie
    }
  },
  methods: {
    getWorldCupMovie() {
      axios({
          method: 'get',
          url: `${API_URL}/movies/recommend/popular/`
        })
        .then(res => {
            this.$store.dispatch('getWorldCupMovie',res.data)
        })
        .catch(err => console.log(err))
    },
    getTwoMovie() {
      this.$store.dispatch('getTwoMovie')
    },
    SelectMovie(movie) {
      this.$store.dispatch('SelectMovie', movie)
    }
        
  },
  created() {
    this.getWorldCupMovie()
    this.getTwoMovie()
  }
}
</script>

<style>

</style>