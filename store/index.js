import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import Cart from "./modules/Cart.js";
export default new Vuex.Store({
  state: {
    iscars:true,
    goos:[],
    address:[],
    gooss:[]
  },
  mutations: {
    saveAddress(state, address) {
      state.address.push(address)
     }
  },
  actions: {},
  modules: {
    Cart,

  }
});
