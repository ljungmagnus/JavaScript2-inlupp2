export default {
  state: {
      cart: []
  },
  getters: {
      shoppingCart: state => state.cart,
      cartTotalAmount: state => {
          let total = 0
          if(state.cart.lenght !==0) {
              state.cart.forEach(cartItem => {
                  total += cartItem.product.price * cartItem.quantity
              })
          }
          return total
      },
      cartTotalQuantity: state => {
          let totalQty = 0
          state.cart.forEach(cartItem => {
              totalQty += cartItem.quantity
          })
          return totalQty
      }
      
  },
  mutations: {
      ADD_TO_CART: (state, { product, quantity }) => {
          state.cart.push({ product, quantity })
      },
      CHANGE_QUANTITY: (state, { item, newQuantity }) => {
          
          item.quantity = newQuantity
      }
  },
  actions: {
      addToCart: ({commit}, { product, quantity }) => {
          commit('ADD_TO_CART', { product, quantity })
      },
      changeQuantity: ({commit}, {item, newQuantity}) => {
          commit('CHANGE_QUANTITY', {item, newQuantity})
      }
  }
}
