import router from "@/router"
import axios from "axios"
const API_URL = 'http://127.0.0.1:8000'

const Movie = {
    state: {
        movieList : null,
        movieDetail: null,
        reviewList : null,
        reviewContent : null,
        ReviewOfmovie : null,
        Review : null,
        CommentList : null,
        Comment: null
    },
    getters: {
        
    },
    mutations: {
        GET_MOVIES(state, payload) {
            state.movieList = payload
        },

        GET_MOVIE_DETAIL(state, payload) {
            state.movieDetail = payload
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
                    // console.log(state.ReviewOfmovie)
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
            const idx = state.CommentList.indexOf(comment)
            state.CommentList.splice(idx,1)
        }
    

    },
    actions: {
        getMovies(context) {
            axios({
                methods: 'get',
                url: `${API_URL}/movies/`
            })
            .then(res => {
                context.commit('GET_MOVIES',res.data)
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


    }
}

export default Movie