import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import CartIcon from '../cart-icon/cart-icon'

function Header() {
  return (
    <nav className='nav-menu container'>
      <div className='logo'>
        <Link to='/'>Nomad</Link>
      </div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
      <CartIcon/>
    </nav>
  )
}

export default Header
