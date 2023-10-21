import React from 'react'
import './SingleProduct.style.scss'
import { ProductsContext } from '../../context/ProductsContext'
import Layout from '../shared/Layout'
import { useContext, useState, useEffect } from 'react'
import { useNavigate, useMatch } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { isInCart } from '../helpers'

function SingleProduct() {
  const match = useMatch('/product/:id')
  const navigate = useNavigate()
  const { addProduct, cartItems, increase } = useContext(CartContext)
  const { products } = useContext(ProductsContext)
  const { id } = match.params
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id))

    if (!product) navigate('/shop')
    else setProduct(product)
  }, [id, product, navigate, products])

  if (!product) {
    return null
  }

  const { imageUrl, title, price, description } = product

  return (
    <Layout>
      <div className='single-product-container'>
        <div className='product-image'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='product-details'>
          <div className='name-price'>
            <h3>{title}</h3>
            <p>$ {price}</p>
          </div>
          <div className='add-to-cart-btns'>
            {isInCart(product, cartItems) ? (
              <button className='button is-white nomad-btn' id='btn-white-outline' onClick={() => increase(product)}>
                ADD MORE
              </button>
            ) : (
              <button className='button is-white nomad-btn' id='btn-white-outline' onClick={() => addProduct(product)}>
                ADD TO CART
              </button>
            )}

            <button className='button is-black nomad-btn' id='btn-white-outline'>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className='product-description'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SingleProduct
