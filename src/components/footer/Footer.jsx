import React from 'react'
import './footer.style.scss'

function Footer() {
  const year = new Date().getFullYear()

  return <div className='footer'>{year} NOMAD Store</div>
}

export default Footer
