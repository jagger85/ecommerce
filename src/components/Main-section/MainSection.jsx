import React from 'react'
import { useNavigate } from 'react-router-dom'
import studioBag from '../../assets/studio-bag.png'
import './MainSection.styles.scss'

function MainSection() {
  let navigate = useNavigate()
  return (
    <section className='main-section'>
        <div className='background'/>
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='img-container'>
          <img src={studioBag} alt='studio bag' />
        </div>
        <div className='ms-m-description'>
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
            We make products that effortlessly transition from day to night. From the board room to the fitness studio,
            and everywhere in between, each Nomads piece is thoughtfully created to be the perfect balance of form and
            function.
          </p>
          <button className='main-section-btn' id='shop-now' onClick={() => navigate('/product/1')}>
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
    </section>
  )
}

export default MainSection
