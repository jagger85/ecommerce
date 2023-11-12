import React from 'react'
import spinner from '../../assets/spinner.gif'
import './Spinner.style.scss'

function Spinner() {
  return (
    <div className='spinner-container'>
    <img className='spinner-gif' src={spinner}/>
    </div>
  )
}

export default Spinner