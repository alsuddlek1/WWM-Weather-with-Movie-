import Vue from 'vue'
import Vuex from 'vuex'
import Movie from './modules/Movie'
import accounts from './modules/accounts'
import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedstate()
  ],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Movie,
    accounts
  }
})
