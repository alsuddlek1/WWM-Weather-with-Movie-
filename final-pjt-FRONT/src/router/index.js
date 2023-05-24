import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieMainView from '../views/MovieMainView.vue'
import MovieListVIew from '../views/MovieListVIew.vue'
import LikeMovieView from '../views/LikeMovieView.vue'
import PopularMovieView from '../views/PopularMovieView.vue'
import randomRecommendView from '../views/randomRecommendView.vue'
import weatherMovieView from '../views/weatherMovieView.vue'
import signUpView from '../views/signUpView.vue'
import LoginView from '../views/LoginView.vue'
import searchView from '../views/searchView.vue'
import StartWorldCupView from '../views/StartWorldCupView.vue'
import MovieDetail from '@/components/MovieDetail.vue'
import ReviewItem from '@/components/ReviewItem.vue'
import ReviewCreate from '@/components/ReviewCreate.vue'
import ReviewUpdata from '@/components/ReviewUpdata.vue'
import CommentCreate from '@/components/CommentCreate.vue'
import CommentUpdate from '@/components/CommentUpdate.vue'
import WorldCup64 from '@/components/WorldCup64.vue'
import WorldCup32New from '@/components/WorldCup32New.vue'
import WorldCup32 from '@/components/WorldCup32.vue'
import WorldCup16 from '@/components/WorldCup16.vue'
import WorldCup8 from '@/components/WorldCup8.vue'
import WorldCup4 from '@/components/WorldCup4.vue'
import WorldCup2 from '@/components/WorldCup2.vue'
import WorldCupFinal from '@/components/WorldCupFinal.vue'
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
    name: 'LikeMovieView',
    component: LikeMovieView
  },
  {
    path: '/popular',
    name: 'PopularMovieView',
    component: PopularMovieView
  },
  {
    path: '/random',
    name: 'randomRecommendView',
    component: randomRecommendView
  },
  {
    path: '/startWorldCup',
    name: 'StartWorldCupView',
    component: StartWorldCupView
  },
  {
    path: '/worldCup32New',
    name: 'WorldCup32New',
    component: WorldCup32New
  },
  {
    path: '/worldcup64',
    name: 'WorldCup64',
    component: WorldCup64
  },
  {
    path: '/worldcup32',
    name: 'WorldCup32',
    component: WorldCup32
  },
  {
    path: '/worldCup16',
    name: 'WorldCup16',
    component: WorldCup16
  },
  {
    path: '/worldCup8',
    name: 'WorldCup8',
    component: WorldCup8
  },
  {
    path: '/worldCup4',
    name: 'WorldCup4',
    component: WorldCup4
  },
  {
    path: '/worldCup2',
    name: 'WorldCup2',
    component: WorldCup2
  },
  {
    path: '/worldCupFinal/',
    name: 'WorldCupFinal',
    component: WorldCupFinal
  },  
  {
    path: '/searchView',
    name: 'searchView',
    component: searchView
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
    name: 'weatherMovieView',
    component: weatherMovieView
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
