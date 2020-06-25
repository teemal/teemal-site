import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Recipe from '../views/Recipes.vue'
import Login from '../views/Login.vue'
import RentBurdening from '../views/RentBurdening.vue'
import AddRecipe from '../views/AddRecipe.vue'

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
    path: '/addRecipe',
    name: 'addRecipe',
    component: AddRecipe
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

export default router
