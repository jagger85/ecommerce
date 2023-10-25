import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import Layout from '../../shared/Layout'
function Success() {
  const { clearCart, cartItems } = useContext(CartContext)

  useEffect(() => {
    if (cartItems.length !== 0) clearCart()
  }, [clearCart, cartItems])

  const navigate = useNavigate()
  
  return (
    <Layout>
      <div className='checkout'>
        <h1>Thank you for your order</h1>
        <p>We are currently processing your order and will send you a confirmation email shortly</p>
        <div>
          <button className='button is-black nomad-btn submit' onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Success
