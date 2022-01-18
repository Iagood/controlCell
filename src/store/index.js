import Vue from 'vue'
import Vuex from 'vuex'
import customers from './modules/customers'
import { state,mutations } from './default'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        customers
    },
    state,
    mutations
})

export default store