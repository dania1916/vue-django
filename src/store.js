import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        status:'',
        token: localStorage.getItem('token') || '',
        pk: localStorage.getItem('pk') || '',
        user: {}
    },
    mutations:{
        auth_request(state){
            state.status = 'loading'
          },
          auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
          },
          auth_error(state){
            state.status = 'error'
          },
          logout(state){
            state.status = ''
            state.token = ''
          },
    },
    actions:{
        login({commit}, user){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'http://localhost:8000/api/auth/login/', data: user, method: 'POST' })
              .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                const pk = resp.data.user.pk
                localStorage.setItem('token', token)
                localStorage.setItem('pk',pk)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
                resolve(resp)
              })
              .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
              })
            })
        },
        register({commit}, user){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios({url: 'http://localhost:8000/api/users/', data: user, method: 'POST' })
              .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                const pk = resp.data.user.pk
                localStorage.setItem('token', token)
                localStorage.setItem('pk',pk)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
                resolve(resp)
              })
              .catch(err => {
                commit('auth_error', err)
                localStorage.removeItem('token')
                reject(err)
              })
            })
          },
          logout({commit}){
            return new Promise((resolve, reject) => {
              commit('logout')
              localStorage.removeItem('token')
              localStorage.removeItem('pk')
              delete axios.defaults.headers.common['Authorization']
              resolve()
            })
          }
    },
    getters:{
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})
