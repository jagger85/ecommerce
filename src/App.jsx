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
import SignUp from './components/sing-up/SignUp'
import SignIn from './components/sign-in/SignIn'
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
        <Route path='/success' element={<Success />} />
        <Route path='/cancelled' element={<Canceled />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
