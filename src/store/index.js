import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    route: 'home',
    token: null,
    hasAuth: false
  },
  mutations: {
    changeRoute(state, route){
      state.route = route;
    },
    authUser (state, userData) {
      state.token = userData.token
      state.hasAuth = true
    },
    clearAuthData (state) {
      state.token = null
    }
  },
  actions: {

  },
  modules: {
  }
})
