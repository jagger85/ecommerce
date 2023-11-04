import React from 'react'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import Shop from './components/pages/shop/Shop'
import SingleProduct from './components/Single-product/SingleProduct'
import CartPage from './components/pages/Cart-page/CartPage'
import Checkout from './components/checkout/Checkout'
import Success from './components/checkout/stripe-checkout/Success'
import Canceled from './components/checkout/stripe-checkout/Canceled'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cancelled' element={<Canceled/>} />
      </Routes>
    </div>
  )
}

export default App
