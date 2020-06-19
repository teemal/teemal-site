import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css'
import * as firebase from "firebase";

Vue.config.productionTip = false

firebase.initializeApp(process.env.VUE_APP_FIREBASE_CONFIG);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
