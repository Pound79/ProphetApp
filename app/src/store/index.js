import Vuex from 'vuex'
import Vue from 'vue'
import prophet from './modules/prophet'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    prophet
  },
  strict: process.env.NODE_ENV !== 'production'
})
