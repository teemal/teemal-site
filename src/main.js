import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './../node_modules/bulma/css/bulma.css'
import * as firebase from "firebase";
import VueFirestore from 'vue-firestore';
require('dotenv').config();

Vue.config.productionTip = false
const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DB_URL,
    projectId: process.env.VUE_APP_PROJ_ID,
    storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MSG_SENDER_OD,
    appId: process.env.VUE_APP_APP_ID,
}

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
Vue.use(VueFirestore);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
