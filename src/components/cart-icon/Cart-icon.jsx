import React from 'react'
import shoppingBag from '../../assets/cart.png'
import './Cart-icon.styles.scss'
function CartIcon() {
  return (
    <div className='cart-container'>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      <span className='cart-count'> 5 </span>
    </div>
  )
}

export default CartIcon
