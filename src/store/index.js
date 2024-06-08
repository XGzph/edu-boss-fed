import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用于在登陆成功后保存用户信息，初始值尝试读取本地信息
    user: JSON.parse(window.localStorage.getItem('uesr') || null)
  },
  getters: {
  },
  mutations: {
    // 存储用户数据
    setUser (state, payload) {
      state.user = JSON.parse(payload)
      window.localStorage.setItem('user', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
