import axios from "axios"
import router from "@/router"
const API_URL = 'http://127.0.0.1:8000'
const accounts = {
    state: {
        token: null,    
        userpk : null
    },
    getters: {
        isLogin(state){
            return state.token ? true : false
        }
    },
    mutations: {
        SAVE_TOKEN(state, token) {
            state.token = token
            router.push({name: 'MovieMainView'})
            axios({
                method: 'get',
                url: `${API_URL}/accounts/user/`,
                headers: {
                Authorization: `Token ${token}`
                }
            })
            .then(res => state.userpk = res.data.pk)
        },

        DELETE_TOKEN(state) {
            state.token = null
        }
    },
    actions: {
        signUp(context ,payload) {
            const username = payload.username
            const password1 = payload.password1
            const password2 = payload.password2

            axios({
                method: 'post',
                url : `${API_URL}/accounts/signup/`,
                data: {
                    username, password1, password2
                }
            })
            .then(res => {
                context.commit('SAVE_TOKEN', res.data.key)
            })
            .catch(err => console.log(err))
        },

        login(context ,payload) {
            const username = payload.username
            const password = payload.password

            axios({
                method: 'post',
                url : `${API_URL}/accounts/login/`,
                data: {
                    username, password
                }
            })
            .then(res => {
                context.commit('SAVE_TOKEN', res.data.key)
            })
            .catch(err => console.log(err))
        },

        logOut(context) {
            
            axios({
                method: 'post',
                url: `${API_URL}/accounts/logout/`,
            })
            .then(res => {
                context.commit('DELETE_TOKEN', res.data.key)
            })
            .catch(err => console.log(err))
        }
        
        

    },
}

export default accounts