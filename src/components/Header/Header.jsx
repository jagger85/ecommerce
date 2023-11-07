import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import CartIcon from '../cart-icon/CartIcon'
import { auth } from '../../firebase'
import { UserContext } from '../../context/UserContext'
function Header() {

  const { user } = useContext(UserContext)
  console.log('user', user)
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
        {
          !user 
          ? <span>
            <li><Link to='/sign-in'> Sign In</Link></li>
            <li><Link to='/sign-up'> Sign Up</Link></li>
            </span>
          : <li><Link onClick={()=> auth.signOut()}> Sign Out</Link></li>
        }
      </ul>
      <CartIcon/>
    </nav>
  )
}

export default Header
