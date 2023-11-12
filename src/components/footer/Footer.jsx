import React from 'react'
import './Footer.style.scss'

function Footer() {
  const year = new Date().getFullYear()

  return <div className='footer'>{year} JAGGER Store</div>
}

export default Footer
