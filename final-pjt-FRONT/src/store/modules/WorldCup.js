import _ from 'lodash'
const WorldCup = {
    state: {
      worldcup64 : null,
      worldcup32 : null,
      worldTwoMovie : null,
    },
    getters: {
    },
    mutations: {
      GET_WORLD_CUP_MOVIE(state,payload) {
        state.worldcup64 = payload
      },

      GET_TWO_MOVIE(state) {
        state.worldTwoMovie = _.sampleSize(state.worldcup64,2)
        state.worldTwoMovie.forEach(element => {
          const idx = state.worldcup64.indexOf(element)          
          state.worldcup64.splice(idx,1)
          console.log(state.worldcup64)
        });
      }
    },
    actions: {
      getWorldCupMovie(context, data) {
        context.commit('GET_WORLD_CUP_MOVIE', data)
    },

    getTwoMovie(context) {
        context.commit('GET_TWO_MOVIE')
    },
    SelectMovie(context, movie){
      context.commit('SELECT_MOVIE',movie)
    }
    },
}

export default WorldCup