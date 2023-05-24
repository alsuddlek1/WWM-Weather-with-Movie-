import router from "@/router"
import axios from "axios"
import _ from 'lodash'
const API_URL = 'http://127.0.0.1:8000'

const Movie = {
    state: {
        movieList : null,
        movieListPlus : null,
        movieDetail: null,
        movieLikeList : null,
        popularMovie: null,
        reviewList : null,
        reviewContent : null,
        ReviewOfmovie : null,
        Review : null,
        CommentList : null,
        Comment: null,
        LikeCount : null,
        LikeTorF : null,
        searchMovie : null

    },
    getters: {
        popularMovie(state) {
            return _.take(state.popularMovie,10)
        },
    },
    mutations: {
        MOVIE_LIST_PLUS_NULL(state){
            state.movieListPlus = null
        },

        GET_MOVIES(state, payload) {
            if (state.movieListPlus === null) {
                state.movieListPlus = []
            }

            payload.forEach(element => {
                if (!state.movieListPlus.includes(element)) {
                    state.movieListPlus.push(element)
                }
            });

        },

        GET_MOVIE_LIST(state,payload) {
            state.movieList = null
            state.movieList = payload
        },

        GET_MOVIE_DETAIL(state, payload) {
            state.movieDetail = payload
            state.LikeCount = payload.like_users.length
            if (payload.like_users.includes(this.state.accounts.userpk)) {
                state.LikeTorF = true
            } else {
                state.LikeTorF = false
            } 
        },

        GET_REVIEW(state, payload) {
            state.reviewList = payload
        },

        GET_REVIEW_CONTENT(state, payload){
            for (const review of state.reviewList) {
                if (review.id === payload) {
                    state.reviewContent = review.content
                    return
                }
            }
        },

        SEARCH_MOVIE_ID(state, payload) {
            for (const review of state.reviewList){
                if (review.id === payload){
                    state.ReviewOfmovie = review.movie
                    const title = review.title
                    const content = review.content
                    const reviewId = payload
                    const userId = review.user
                    const rev = {title, content, reviewId, userId}
                    state.Review = rev
                    return
                }        
            }
        },

        GET_COMMENTS(state, payload) {
            state.CommentList = payload
        },

        SEARCH_REVIEW(state,payload) {
            for (const comment of state.CommentList) {
                if (comment.id === payload){
                    const content = comment.content
                    const ReviewId = comment.review
                    const Com = {content,ReviewId}
                    state.Comment = Com
                    return
                }
            }
        },
        DELETE_COMMENT(state,payload) {
            const comment = state.CommentList.filter(comments => {
                return comments.id === payload
            })
            const idx = state.CommentList.indexOf(comment[0])
            state.CommentList.splice(idx,1)
        },

        GET_LIKE_MOVIE(state, data){
            state.movieLikeList = data
        },

        GET_POPULAR_MOVIE(state,payload) {
            state.popularMovie = payload
        },

        LIKE(state,data) {
            state.LikeCount = data.movie.like_users.length
            state.LikeTorF = data.is_liked

            if (data.movie.like_users.includes(this.state.accounts.userpk)) {
                state.LikeTorF = true
            } else {
                state.LikeTorF = false
            } 
            
        },

        DETECT_MOVIE(state, payload) {
            state.searchMovie = null
            state.searchMovie = []
            if (payload === "") {
                state.searchMovie = null
            } else {
                const word = payload.split(' ').join('')
            state.movieList.forEach(element => {
                const title = element.title.split(' ').join('')
                if (title.includes(word)) {
                    state.searchMovie.push(element)
                }
            });
            }
            
        },

        MOVIES_NULL(state) {
            state.searchMovie = null
        }
    },
    actions: {
        getMovies(context, cnt) {
            axios({
                methods: 'get',
                url: `${API_URL}/movies/`,
                params : {
                    page : cnt
                }
            })
            .then(res => {
                if (res.config.params.page === 1) {
                    context.commit('MOVIE_LIST_PLUS_NULL')
                }
                context.commit('GET_MOVIES',res.data.results)
            })
            .catch(err => console.log(err))
        },
        getMovieList(context) {
            axios({
                methods: 'get',
                url: `${API_URL}/movies/random/`
            })
            .then(res => {
                context.commit('GET_MOVIE_LIST',res.data)
            })
            .catch(err => console.log(err))
        },

        getMovieDetail(context, payload) {
            axios({
                methods: 'get',
                url: `${API_URL}/movies/${payload}/`
            })
            .then(res => {
                context.commit('GET_MOVIE_DETAIL',res.data)
            })
            .catch(err => console.log(err))
        },

        getReview(context, payload) {
            axios({
                method : 'get',
                url: `${API_URL}/movies/${payload}/reviews/`,
                headers: {
                    Authorization: `Token ${this.state.accounts.token}`
                }
            })
            .then(res => {
                context.commit('GET_REVIEW', res.data)
            })
            .catch(err => {
                console.log(err)
            })
        },

        getReviewContent(context, payload){
            context.commit('GET_REVIEW_CONTENT', payload)
        },

        searchMovieId(context, payload) {
            context.commit('SEARCH_MOVIE_ID', payload)
            
        },

        deleteReview(context, data) {
            axios({
                method : 'delete',
                url: `${API_URL}/movies/${data.movieId}/${data.ReviewId}/`,
                headers: {
                    Authorization: `Token ${this.state.accounts.token}`
                }
            })
            .then(() => {
                router.push({name:'MovieDetail', params:{movie_id : data.movieId}})
            })
            .catch(err => {
                console.log(err)
            })
        },

        getComments(context, payload) {
            axios({
                method : 'get',
                url: `${API_URL}/movies/${payload}/comments/`,
                headers: {
                    Authorization: `Token ${this.state.accounts.token}`
                }
            })
            .then((res) => {
                context.commit('GET_COMMENTS',res.data)
            })
            .catch(err => {
                console.log(err)
            })
        },

        serachReview(context, payload){
            context.commit('SEARCH_REVIEW', payload)
        },

        deleteComment(context, data) {
            axios({
                method : 'delete',
                url: `${API_URL}/movies/${data.ReviewId}/comments/${data.CommentId}/`,
                headers: {
                    Authorization: `Token ${this.state.accounts.token}`
                }
            })
            .then(() => {
                context.commit('DELETE_COMMENT',data.CommentId)
            })
            .catch(err => {
                console.log(err)
            })
        },

        getLikeMovie(context, data) {
            context.commit('GET_LIKE_MOVIE', data)
        },

        getPopularMovie(context, payload) {
            context.commit('GET_POPULAR_MOVIE', payload)
        },

        Like(context, payload) {
            axios({
                method: 'post',
                url: `${API_URL}/movies/${payload.userpk}/${payload.movieId}/like/`,
                data: {
                  user : payload.userpk,
                  movie : payload.movieId
                },
                headers: {
                    Authorization: `Token ${this.state.accounts.token}`
                  }
                })
              .then((res) => {
                context.commit('LIKE', res.data)
              })
              .catch(err => console.log(err))
        },

        detectMovie(context, payload) {
            context.commit('DETECT_MOVIE', payload)
        },

        moviesnull(context) {
            context.commit('MOVIES_NULL')
        }


    }
}

export default Movie