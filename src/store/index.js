import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    app:"s-shop",
    
  },
  modules:{
    cart
  }
})

export default store