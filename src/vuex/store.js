import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    nickName: '',
    cartCount: 0
  },
  mutations: {
    setNickName(state, nickName) {
      state.nickName = nickName;
    },
    updateCount(state, num) {
      state.cartCount = num;
    }
  }
})
