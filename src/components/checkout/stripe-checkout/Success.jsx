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
      <div className='container'>
        <div className='subcontainer' style={{marginTop: '3rem'}}>

        <div style={{fontSize:'2rem', textAlign:'center', fontWeight:'bold'}}>Thank you for your order</div>
        <span style={{textAlign:'center'}}>We are currently processing your order and will send you a confirmation email shortly</span>
        <div>
          <button className='outlined-btn' onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default Success
