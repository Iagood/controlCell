import axios from 'axios'

const resource = '/categories'

export default {
    getCategories({ commit }) {
        commit('SET_PRELOADER', true)
        return axios.get(`${resource}`).then(response => {
            commit('SET_CATEGORIES', response.data.data)
        })
        .finally(() => commit('SET_PRELOADER', false))
    }
}