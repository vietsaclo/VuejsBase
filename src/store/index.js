import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      message: '',
    }
  },
  getters: {
    MESSAGE: state => {
      return state.message;
    }
  },
  mutations: {
    SET_MESSAGE: (state, payload) => {
      state.message = payload;
    }
  },
  actions: {}
});