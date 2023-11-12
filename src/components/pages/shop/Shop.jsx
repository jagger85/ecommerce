import React, { useContext } from 'react'
import Layout from '../../shared/Layout'
import FeaturedProduct from '../../shared/FeaturedProduct'
import { ProductsContext } from '../../../context/ProductsContext'
import './Shop.style.scss'

function Shop() {
  const { products } = useContext(ProductsContext)
  const allProducts = products.map((product) => <FeaturedProduct {...product} key={product.id} />)
  return (
    <Layout>
      <div className='container'>
        <div className='title-container'>
        Shop
        </div>
      <div className='product-list-container'>
        <div className='product-list'>{allProducts}</div>
      </div>
      </div>
    </Layout>
  )
}

export default Shop
