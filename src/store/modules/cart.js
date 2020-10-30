import { loadCarts } from "../../services/carts";

export default {
  namespaced:true,
  state: {
    carts: [],
  },
  mutations: {
    //  保存购物车数据到vuex
    loadCartsData(state, payload) {
      state.carts = payload;
    },
  },
  actions: {
    //  获取购物车数据
    async loadCartsFromServer({ commit }) {
      //  此处需要调接口取数据
      const res = await loadCarts();
      commit("loadCartsData", res);
    },
  },
  getters: {
    //  计算购物车的数量
    cartCount(state) {
      return state.carts.reduce((pre, cur) => pre + cur.quantity, 0);
    },
  },
};
