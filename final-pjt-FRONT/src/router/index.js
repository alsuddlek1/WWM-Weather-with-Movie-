import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieMainView from '../views/MovieMainView.vue'
import MovieListVIew from '../views/MovieListVIew.vue'
import MovieDetail from '@/components/MovieDetail.vue'
import ReviewItem from '@/components/ReviewItem.vue'
import ReviewCreate from '@/components/ReviewCreate.vue'
import ReviewUpdata from '@/components/ReviewUpdata.vue'
import CommentCreate from '@/components/CommentCreate.vue'
import CommentUpdate from '@/components/CommentUpdate.vue'
import LikeMovie from '@/components/LikeMovie.vue'
import PopularMovie from '@/components/PopularMovie.vue'
import randomRecommend from '@/components/randomRecommend.vue'
import WorldCup64 from '@/components/WorldCup64.vue'
import weatherMovie from '@/components/weatherMovie.vue'
import signUpView from '../views/signUpView.vue'
import LoginView from '../views/LoginView.vue'
import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MovieMainView',
    component: MovieMainView
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
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
    path: '/review/:reviewId/update/',
    name: 'ReviewUpdata',
    component: ReviewUpdata
  },
  {
    path: '/comment/create/:reviewId',
    name: 'CommentCreate',
    component: CommentCreate
  },
  {
    path: '/comment/update/:commentId',
    name: 'CommentUpdate',
    component: CommentUpdate
  },
  {
    path: '/movie/like/:user',
    name: 'LikeMovie',
    component: LikeMovie
  },
  {
    path: '/popular',
    name: 'PopularMovie',
    component: PopularMovie
  },
  {
    path: '/random',
    name: 'randomRecommend',
    component: randomRecommend
  },
  {
    path: '/worldcup64',
    name: 'WorldCup64',
    component: WorldCup64
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
  {
    path: '/weather',
    name: 'weatherMovie',
    component: weatherMovie
  },
  {
    path: '*',
    redirect : '/404'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
