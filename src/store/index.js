import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    route: 'home'
  },
  mutations: {
    changeRoute(state, route){
      state.route = route;
    }
  },
  actions: {
  },
  modules: {
  }
})
