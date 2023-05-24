import router from '@/router'
import _ from 'lodash'
const WorldCup = {
    state: {
      worldcup64 : null,
      worldcup32 : null,
      worldcup16 : null,
      worldcup8 : null,
      worldcup4 : null,
      worldcup2 : null,
      worldcupFinal : null,
      worldTwoMovie : null,
    },
    getters: {
    },
    mutations: {
      GET_WORLD_CUP_MOVIE_32(state, payload) {
        state.worldcup32 = _.take(payload,32)
        state.worldcup16 = null
        state.worldcup8 = null
        state.worldcup4 = null
        state.worldcup2 = null
        state.worldcupFinal = null

        state.worldTwoMovie = _.sampleSize(state.worldcup32,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup32.indexOf(element)          
          state.worldcup32.splice(idx,1)
        });
      },
      GET_WORLD_CUP_MOVIE(state,payload) {
        state.worldcup64 = payload
        state.worldcup32 = null
        state.worldcup16 = null
        state.worldcup8 = null
        state.worldcup4 = null
        state.worldcup2 = null
        state.worldcupFinal = null

        state.worldTwoMovie = _.sampleSize(state.worldcup64,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup64.indexOf(element)          
          state.worldcup64.splice(idx,1)
        });

      },

      SELECT_MOVIE(state,movie){
        if (state.worldcup32 === null) {
          state.worldcup32 = []
        }
        if (state.worldcup64.length === 0) {
          router.push({name:'WorldCup32'})
        }
        state.worldcup32.push(movie)
        state.worldTwoMovie = _.sampleSize(state.worldcup64,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup64.indexOf(element)          
          state.worldcup64.splice(idx,1)
        });
    
      },

      GET_WORLD_CUP_MOVIE_2(state){
        state.worldTwoMovie = _.sampleSize(state.worldcup32,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup32.indexOf(element)          
          state.worldcup32.splice(idx,1)
        });
      },

      SELECT_MOVIE2(state,movie){
        if (state.worldcup16 === null) {
          state.worldcup16 = []
        }
        if (state.worldcup32.length === 0) {
          router.push({name:'WorldCup16'})
        }
        state.worldcup16.push(movie)
        state.worldTwoMovie = _.sampleSize(state.worldcup32,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup32.indexOf(element)          
          state.worldcup32.splice(idx,1)
        });
      },

      GET_WORLD_CUP_MOVIE_3(state){
        state.worldTwoMovie = _.sampleSize(state.worldcup16,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup16.indexOf(element)          
          state.worldcup16.splice(idx,1)
        });
      },

      SELECT_MOVIE3(state,movie){
        if (state.worldcup8 === null) {
          state.worldcup8 = []
        }
        if (state.worldcup16.length === 0) {
          router.push({name:'WorldCup8'})
        }
        state.worldcup8.push(movie)
        state.worldTwoMovie = _.sampleSize(state.worldcup16,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup16.indexOf(element)          
          state.worldcup16.splice(idx,1)
        });
      },

      GET_WORLD_CUP_MOVIE_4(state){
        state.worldTwoMovie = _.sampleSize(state.worldcup8,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup8.indexOf(element)          
          state.worldcup8.splice(idx,1)
        });
      },

      SELECT_MOVIE4(state,movie){
        if (state.worldcup4 === null) {
          state.worldcup4 = []
        }
        if (state.worldcup8.length === 0) {
          router.push({name:'WorldCup4'})
        }
        state.worldcup4.push(movie)
        state.worldTwoMovie = _.sampleSize(state.worldcup8,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup8.indexOf(element)          
          state.worldcup8.splice(idx,1)
        });
      },

      GET_WORLD_CUP_MOVIE_5(state){
        state.worldTwoMovie = _.sampleSize(state.worldcup4,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup4.indexOf(element)          
          state.worldcup4.splice(idx,1)
        });
      },

      SELECT_MOVIE5(state,movie){
        if (state.worldcup2 === null) {
          state.worldcup2 = []
        }
        if (state.worldcup4.length === 0) {
          router.push({name:'WorldCup2'})
        }
        state.worldcup2.push(movie)
        state.worldTwoMovie = _.sampleSize(state.worldcup4,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup4.indexOf(element)          
          state.worldcup4.splice(idx,1)
        });
      },

      GET_WORLD_CUP_MOVIE_6(state){
        state.worldTwoMovie = _.sampleSize(state.worldcup2,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup2.indexOf(element)          
          state.worldcup2.splice(idx,1)
        });
      },

      SELECT_MOVIE6(state,movie){
        if (state.worldcup2.length === 0) {
          router.push({name:'WorldCupFinal'})
        }
        state.worldcupFinal= movie
      },

    
    },
    actions: {
      getWorldCupMovie(context, data) {
        context.commit('GET_WORLD_CUP_MOVIE', data)
      },
      SelectMovie(context, movie){
        context.commit('SELECT_MOVIE',movie)
      },

      getWorldCupMovie2(context){
        context.commit('GET_WORLD_CUP_MOVIE_2')
      },
      SelectMovie2(context, movie){
        context.commit('SELECT_MOVIE2',movie)
      },

      getWorldCupMovie3(context){
        context.commit('GET_WORLD_CUP_MOVIE_3')
      },
      SelectMovie3(context, movie){
        context.commit('SELECT_MOVIE3',movie)
      },

      getWorldCupMovie4(context){
        context.commit('GET_WORLD_CUP_MOVIE_4')
      },
      SelectMovie4(context, movie){
        context.commit('SELECT_MOVIE4',movie)
      },

      getWorldCupMovie5(context){
        context.commit('GET_WORLD_CUP_MOVIE_5')
      },
      SelectMovie5(context, movie){
        context.commit('SELECT_MOVIE5',movie)
      },

      getWorldCupMovie6(context){
        context.commit('GET_WORLD_CUP_MOVIE_6')
      },

      SelectMovie6(context, movie) {
        context.commit('SELECT_MOVIE6',movie)
      },

      getWorldCupMovie32(context,data) {
        context.commit('GET_WORLD_CUP_MOVIE_32', data)
      }
    },
}

export default WorldCup