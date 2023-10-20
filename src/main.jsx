import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ProductsContextProvider from './context/ProductsContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
