import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addToCart(state, book) {
      let product = state.cartList.find(item => item.bookId === book.bookId)
      if (product) {
        product.bookCount += 1
      } else{
        book.bookCount = 1
        state.cartList = [...state.cartList,book]
      }
    }

  },
  actions: {

  },
  getters:{
    count:(state)=>state.cartList.reduce((prev,next)=>prev+next.bookCount,0)
  },
  plugins: [logger]
})