import Vue from 'vue'
import Vuex from 'vuex'
import customers from './modules/customers'
import products from './modules/products'
import categories from './modules/categories'
import { state,mutations } from './default'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        customers,
        products,
        categories
    },
    state,
    mutations
})

export default store