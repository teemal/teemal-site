import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "@/store"
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Recipe from '../views/Recipes.vue'
import Login from '../views/Login.vue'
import RentBurdening from '../views/RentBurdening.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/rentBurdening',
    name: 'RentBurdening',
    component: RentBurdening
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//route gaurd, used for checking auth from meta tag as of now
router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    //needs login
    if(!store.state.hasAuth){
      next({
        name: "/login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
