import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieMainView from '../views/MovieMainView.vue'
import MovieListVIew from '../views/MovieListVIew.vue'
import MovieDetail from '@/components/MovieDetail.vue'
import ReviewItem from '@/components/ReviewItem.vue'
import ReviewCreate from '@/components/ReviewCreate.vue'
import signUpView from '../views/signUpView.vue'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MovieMainView',
    component: MovieMainView
  },
  {
    path: '/movies',
    name: 'movies',
    component: MovieListVIew
  },
  {
    path: '/movie/:movie_id',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/review/:reviewId',
    name: 'ReviewItem',
    component: ReviewItem
  },
  {
    path: '/review/:reviewId/create/',
    name: 'ReviewCreate',
    component: ReviewCreate
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
