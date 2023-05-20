import Vue from 'vue'
import Vuex from 'vuex'
import Movie from './modules/Movie'
import accounts from './modules/accounts'
import WorldCup from './modules/WorldCup'
import weather from './modules/weather'
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
    accounts,
    WorldCup,
    weather
  }
})
