import React, { createContext, useReducer } from 'react'
import CartReducer from './CartReducer'

export const CartContext = createContext()

const initialState = { cartItems: [], itemCount: 2, total: 0}

const CartContextProvider = ({ children }) =>{
  const [ state, dispatch ] = useReducer(CartReducer, initialState)

  const contextValues = {
    ...state
  }

  return (
    <CartContext.Provider value={contextValues}>
      {
        children
      }
    </CartContext.Provider>
  )

}

export default CartContextProvider