import Vue from 'vue'
import VueRouter from 'vue-router'
import AlphabetGames from "../views/AlphabetGames.vue"
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import GameDetail from "../views/GameDetail.vue"
import Create from "../views/Create.vue"
import Update from "../views/Update.vue"
import Profile from "../views/Profile.vue";
import Pendant from "../views/Pendant.vue"
import GameReviews from "../views/GameReviews.vue"
import store from '../store'

Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if(!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
} 

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Home
  },
  {
    path: '/login', 
    name: "Login",
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register

  },
  {
    path: '/game/:gameId',
    name: "GameDetail",
    component: GameDetail,
    props: true
  },
  {
    path: '/create',
    name: "Create",
    component: Create
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/pendant',
    name: 'Pendant',
    component: Pendant
  },
  {
    path: '/gamelist',
    name: 'GameList',
    component: AlphabetGames
  },
  {
    path: '/game/reviews/:gameId',
    name: 'Reviews',
    component: GameReviews
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
