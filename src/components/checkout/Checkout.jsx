import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import Layout from '../shared/Layout'
import ShippingAddress from './custom-checkout/ShippingAddress'
import CustomCheckout from './custom-checkout/CustomCheckout'
import Ticket from './ticket/Ticket'
import './Checkout.style.scss'

function Checkout() {
  const { itemCount, total, cartItems } = useContext(CartContext)
  const [ shipping, setShipping ] = useState(null)
  const addressShown = {
    display: (shipping ? 'none' : 'block')
  }
  const cardShown = {
    display : (shipping ? 'block' : 'none')
  }

  return (
    <Layout>
      <div className='container checkout'>
        <div className='title-container'>
        Checkout
        </div>
        <Ticket/>
        <div style={addressShown}>
          <ShippingAddress setShipping={setShipping} />
        </div>
        <div style={cardShown}>
          <CustomCheckout {...{shipping, cartItems}}/>
        </div>
      </div>
    </Layout>
  )
}

export default Checkout
