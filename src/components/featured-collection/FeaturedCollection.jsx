import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import FeaturedProduct from '../shared/FeaturedProduct'

function FeaturedCollection() {
  const { products } = useContext(ProductsContext)
  const productItems = products
    .filter((product, i) => i < 4)
    .map((product) => <FeaturedProduct {...product} key={product.id} />)

  return (
    <div className='featured-collection container'>
      <div className='title-container'>
      <span>Featured Collection</span>
      </div>
      <div className='products'>{productItems}</div>
    </div>
  )
}

export default FeaturedCollection
