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
        let itemAlreadyInCart = state.cart.find(cartItem => cartItem.product._id === product._id) 
        if(itemAlreadyInCart) {
            itemAlreadyInCart.quantity += quantity
            return
        }
        state.cart.push({ product, quantity })

      },
      REMOVE_ITEM_FROM_CART: (state, product) => {
           state.cart = state.cart.filter(cartItem => cartItem.product._id !== product._id) 
      },
      CHANGE_QUANTITY: (state, { item, newQuantity }) => {
          
          item.quantity = newQuantity
      }
  },
  actions: {
      addToCart: ({commit}, { product, quantity }) => {
          commit('ADD_TO_CART', { product, quantity })
      },
      removeItemFromCart: ({commit}, product) => {
          commit('REMOVE_ITEM_FROM_CART', product)        
      },
      changeQuantity: ({commit}, {item, newQuantity}) => {
          commit('CHANGE_QUANTITY', {item, newQuantity})
      }
  }
}
