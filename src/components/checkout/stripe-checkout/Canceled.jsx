import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../shared/Layout'
function Canceled() {
  return (
    <Layout>
      <div className='checkout'>
        <h1>Payment failed</h1>
        <p>Payment was not successful</p>
        <div>
          <button className='button is-black nomad-btn submit' onClick={() => navigate('/shop')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Canceled