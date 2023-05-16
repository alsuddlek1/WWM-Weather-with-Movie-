import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieListVIew from '../views/MovieListVIew.vue'
import MovieDetailView from '../views/MovieDetailView.vue'
import ReviewItem from '@/components/ReviewItem.vue'
import signUpView from '../views/signUpView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'movies',
    component: MovieListVIew
  },
  {
    path: '/movie/:movie_id',
    name: 'MovieDetailView',
    component: MovieDetailView
  },
  {
    path: '/review/:reviewId',
    name: 'ReviewItem',
    component: ReviewItem
  },
  {
    path: '/signup',
    name: 'signUpView',
    component: signUpView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
