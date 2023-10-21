import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import Layout from '../../shared/Layout'
import CartItem from './CartItem'
import Total from './Total'
import './CartPage.style.scss'
function CartPage() {
  
  const { cartItems, itemCount, total } = useContext(CartContext)

  return (
    <Layout>
      <>
      <h1>Cart</h1>
      {
        cartItems.length === 0
        ? <div className='empty-cart'>Your cart is empty</div>
        : 
        <>
        <div className='cart-page'>
          <div className='cart-item-container'>
            {
              cartItems.map( item => <CartItem {...item} key={item.id}/> )
            }
          </div>
        <Total itemCount={itemCount} total={total}/>
        </div>
        </>
      }
      </>
    </Layout>
  )
}

export default CartPage