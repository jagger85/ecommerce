import React from 'react'
import shoppingBag from '../../assets/cart-icon.png'
import './CartIcon.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
function CartIcon() {
  
  const { itemCount } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <div className='cart-container' onClick={()=> navigate('/cart')}>
      <img src={shoppingBag} alt='shopping-cart-icon' />
      {itemCount > 0 ? <span className='cart-count'> {itemCount} </span> : null}
    </div>
  )
}

export default CartIcon
