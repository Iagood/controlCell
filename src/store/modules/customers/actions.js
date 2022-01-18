import axios from 'axios'

const resource = '/customers'

export default {
    getCustomers({ commit }) {
        commit('SET_PRELOADER', true)
        return axios.get(`${resource}`).then(response => {
            commit('SET_CUSTOMER', response.data)
        })
        .finally(() => commit('SET_PRELOADER', false))
    }
}