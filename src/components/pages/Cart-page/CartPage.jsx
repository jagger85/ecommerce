import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Layout from '../../shared/Layout'
import CartItem from './CartItem'
import Total from './Total'
import './CartPage.style.scss'
function CartPage() {
  
  const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext)
  const funcs = { increase, decrease, removeProduct }
  return (
    <Layout>
      <div className='container'>
      <div className='title-container'>
        Cart
      </div>
      <div className='cart-page'>
      {
        cartItems.length === 0
        ? <div className='empty-cart'>Your cart is empty</div>
        : 
        <>
          <div className='cart-item-container'>
            {
              cartItems.map( item => <CartItem {...item} key={item.id} {...funcs}/> )
            }
          </div>
        <Total itemCount={itemCount} total={total} clearCart={clearCart}/>
        </>
      }
        </div>
      </div>
    </Layout>
  )
}

export default CartPage