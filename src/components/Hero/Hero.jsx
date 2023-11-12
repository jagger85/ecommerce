import React from 'react'
import './Hero.styles.scss'

function Hero() {
  return (
    <section className='hero is-large is-info hero-image'>
      <div className='hero-body'>
        <h1 className='hero-title'>Unravel Elegance - Unveil Adventure</h1>
        <div className='shop-now-btn'>
          <span style={{fontWeight:'bold'}}>
          FIND YOUR PERFECT COMPANION
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
