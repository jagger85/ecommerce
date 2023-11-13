import React from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../../shared/Layout'

function Canceled() {

  const navigate = useNavigate()
  return (
    <Layout>
      <div className='container'>
        <div className='subcontainer' style={{marginTop: '3rem'}}>
        <div style={{fontSize:'2rem', textAlign:'center', fontWeight:'bold'}}>Payment failed</div>
        <div style={{textAlign:'center'}}>Payment was not successful</div>
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

export default Canceled