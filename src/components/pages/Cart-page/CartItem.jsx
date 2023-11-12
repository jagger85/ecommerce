import React from 'react'
import './CartPage.style.scss'
function CartItem(props) {
  const { id, title, imageUrl, price, quantity, description, increase, decrease, removeProduct } = props
  const product = { title, imageUrl, price, quantity, id, description }
  return (
    <div className='cart-item'>
      <div className='image-price-name'>
        <div className='item-image'>
          <img src={imageUrl} alt='product' />
        </div>
        <div className='name-price'>
          <div className='cart-product-name'>{title}</div>
          <div className='cart-product-name'>$ {price}</div>
        </div>
      </div>
      <div className='quantity-btns'>
        <div className='quantity'>
          <p>{`Quantity: ${quantity}`}</p>
        </div>
        <div className='btns-container'>
          <div className='btn increase' onClick={() => increase(product)}>
            +
          </div>
          {quantity === 1 && (
            <div className='btn trash' onClick={() => removeProduct(product)}>
              x
            </div>
          )}
          {quantity > 1 && (
            <div className='btn decrease' onClick={() => decrease(product)}>
              -
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CartItem
