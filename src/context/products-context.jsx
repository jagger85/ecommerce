import React, { createContext, useState } from 'react'
import SHOP_DATA from '../shop'

export const ProductContext = createContext()

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(SHOP_DATA)
  
  return(
    <ProductContext.Provider value={{ products }}>
      {
        children
      }
    </ProductContext.Provider>
  )
}

export default ProductsContextProvider