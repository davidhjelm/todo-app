import todo from './modules/todo'

import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'todoApp',
  storage: localStorage
})

export default new Vuex.Store({
  modules: {
    todo
  },
  plugins: [vuexPersist.plugin]
})
