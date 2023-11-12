import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './CollapsedHeader.style.scss'
import { auth } from '../../firebase'
import { UserContext } from '../../context/UserContext'

function Header() {

  const { user } = useContext(UserContext)
  const [ collapsed, setCollapsed ] = useState(true)
  
  return (
      <>
    <nav className='nav-menu collapsed'>
      <div className='logo'>
        <Link to='/'>
          <div className='brand'>
          <span>Jagger 85</span>
          </div>
          </Link>
      </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" onClick={()=>setCollapsed(!collapsed)}>
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
    </nav>
      {
        !collapsed &&
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
        <li><Link to='/cart'>Cart</Link></li>
      </ul>
      }
      </>
  )
}

export default Header