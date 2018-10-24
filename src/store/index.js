import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/index'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true, // 命名空间
  state: {

  },
  getters: {
    token: state => state.user.token
  },
  mutations: {

  },
  actions: {

  },
  modules: { // 引入各个模块的配置信息
    user
  }
})
