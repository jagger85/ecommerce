import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './context/ProductsContext.jsx'
import CartContextProvider from './context/CartContext.jsx'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <Elements stripe={stripePromise}>
          <App />
          </Elements>
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
