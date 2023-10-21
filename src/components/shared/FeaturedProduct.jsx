import React, { useContext } from 'react'
import { isInCart } from '../helpers'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './FeaturedProduct.style.scss'

function FeaturedProduct(product) {
  const { title, imageUrl, price, id } = product
  
  const navigate = useNavigate()
  const { addProduct, cartItems } = useContext(CartContext)
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={()=> navigate(`/product/${id}`)}>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='name-price'>
        <h3>{title}</h3>
        <p>$ {price}</p>
        {
        !isInCart(product,cartItems) 
        ? <button className='button is-black nomad-btn' onClick={()=> addProduct(product)}>ADD TO CART</button>
        : <button className='button is-white nomad-btn' onClick={()=>{}} id='btn-white-outline'>ADD MORE</button>
        }
      </div>
    </div>
  )
}

export default FeaturedProduct
