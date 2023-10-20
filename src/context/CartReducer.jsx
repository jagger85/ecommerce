export function sumItems (cartItems) {
  return {
    itemCount: cartItems.reduce((total, product) => total + product.quantity , 0),
    total: cartItems.reduce((total, prod)=> total + (prod.price * prod.quantity), 0)
  }
}

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // check if item is in cart
      if(!state.cartItems.find(item => item.id === action.payload.id)){
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        })
        return {
          ...state,
          cartItems: [...state.cartItems],
          ...sumItems(state.cartItems)
        }
      }
    default:
      return state
  }
}

export default CartReducer
