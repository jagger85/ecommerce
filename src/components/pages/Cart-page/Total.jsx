import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CartPage.style.scss'

function Total({ itemCount, total, clearCart }) {
  const navigate = useNavigate()

  return (
    <div className='total-container'>
      <div className='total-info-container'>
        <span>Total Items: {itemCount}</span>
        <span>{`Total: $${total}`}</span>
      </div>
      <div className='cart-btn-container'>
        <button className='outlined-btn' style={{marginBottom:'0.5rem'}} onClick={()=>navigate('/checkout')}>
          CHECKOUT
        </button>
        <button className='outlined-btn outlined-red' onClick={()=> clearCart()}>CLEAR</button>
      </div>
    </div>
  )
}

export default Total
