import React from 'react'
import shoppingBag from '../../assets/cart.png'
import './Cart-icon.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
function CartIcon() {
  
  const { itemCount } = useContext(CartContext)

  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      {itemCount > 0 ? <span className='cart-count'> {itemCount} </span> : null}
    </div>
  )
}

export default CartIcon
