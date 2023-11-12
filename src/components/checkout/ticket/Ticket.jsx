import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import './Ticket.style.scss'

function Ticket() {

  const { itemCount, total, cartItems } = useContext(CartContext)
  const [ totalCart, setTotalCart ] = useState(0)
  const [ vat, setVat ] = useState(0)
  const [ deliveryFee, setDeliveryFee ] = useState(12)

  useEffect(()=>{
   
    let total = 0
    cartItems.forEach((item)=>{
      total += item.price * item.quantity
    })
    setTotalCart(total)
    setVat(total*21/100)

  },[cartItems])


  return (
    <div className='ticket-container'>
    <table className='ticket-table'>
      <tr>
        <th className='table-description'>Description</th>
        <th className='table-quantity'>Quantity</th>
        <th className='table-amount'>Amount</th>
        
      </tr>
      {
        cartItems.map(item =>{
          return(
            <tr>
              <td className='table-description'>{item.title}</td>
              <td className='table-quantity'>{item.quantity}</td>
              <td className='table-amount'>{item.price*item.quantity} $</td>
            </tr>
          )
        })
      }
      <tr>
        <td className='table-description'>{`Vat 12%:`}</td>
        <td className='table-quantity'></td>
        <td className='table-amount'>{vat} $</td>
      </tr>
      <tr>
        <td className='table-description' >{`Delivery:`}</td>
        <td className='table-quantity'></td>
        <td className='table-amount'>{deliveryFee} $</td>
      </tr>
      </table>
      <div className='separator'/>
      <table className='ticket-table'>
      <tr>
        <td className='table-description' >{`Total:`}</td>
        <td className='table-amount'>{(totalCart + deliveryFee + vat).toFixed(2)} $</td>
      </tr>
    </table>
    </div>
  )
}

export default Ticket