import React, { useContext } from 'react'
import { isInCart } from '../helpers'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import './FeaturedProduct.style.scss'

function FeaturedProduct(product) {
  const { title, imageUrl, price, id } = product

  const navigate = useNavigate()
  const { addProduct, cartItems, increase } = useContext(CartContext)
  return (
    <div className='featured-product'>
      <div className='featured-image' onClick={() => navigate(`/product/${id}`)}>
        <img src={imageUrl} alt='product' className='feature-product-img' />
      </div>
      <div className='product-name'>
        <h3>{title}</h3>
      </div>
      <div className='featured-product-price-btn-container'>
        <div className='featured-product-price'>
          <p className='price'>$ {price}</p>
        </div>
        <div className='featured-product-btn-container'>
          {!isInCart(product, cartItems) ? (
            <button className='featured-product-btn' onClick={() => addProduct(product)}>
              ADD TO CART
            </button>
          ) : (
            <button className='featured-product-btn' onClick={() => increase(product)}>
              ADD MORE
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProduct
