import axios from 'axios'

const resource = '/products'

export default {
    getProducts({ commit }) {
        commit('SET_PRELOADER', true)
        return axios.get(`${resource}`).then(response => {
            commit('SET_PRODUCT', response.data.data)
        })
        .finally(() => commit('SET_PRELOADER', false))
    }
}