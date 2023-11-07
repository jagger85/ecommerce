import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { fetchFromAPI } from '../../helpers'
import { UserContext } from '../../../context/UserContext'
import { useContext } from 'react'

function CustomCheckout({ shipping, cartItems }) {
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState(null)
  const [error, setError] = useState(null)
  const [cards, setCards] = useState(null)
  const [payment, setPaymentCard] = useState('')
  const [saveCard, setSavedCard] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  useEffect(() => {
    const items = cartItems.map((item) => ({ price: item.price, quantity: item.quantity }))

    if (user) {
      const savedCards = async () => {
        try {
          const cardsList = await fetchFromAPI('get-payment-methods', {
            method: 'GET',
          })
          setCards(cardsList)
        } catch (error) {
          console.log(error)
        }
      }
      savedCards()
    }

    if (shipping) {
      const body = {
        cartItems: items,
        shipping: {
          name: shipping.name,
          address: {
            line1: shipping.address,
          },
        },
        description: 'payment intent for jagger85 shop',
        receipt_email: shipping.email,
      }
      const customCheckout = async () => {
        const { clientSecret } = await fetchFromAPI('create-payment-intent', {
          body,
        })
        setClientSecret(clientSecret)
      }
      customCheckout()
    }
  }, [shipping, cartItems])

  const handleCheckout = async () => {
    
    setProcessing(true)
    let si
    //check if user has selected to save card
    if(saveCard) {
      //make to create a setup intent
      si = await fetchFromAPI('save-payment-method')
    }
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    })
    if (payload.error) {
      setError(`Payment Failed: ${payload.error.message}`)
    } else {
      if(saveCard && si) {
        //send the customers details to be saved with stripe
        await stripe.confirmCardSetup(si.client_secret,{
          payment_method: {
            card: elements.getElement(CardNumberElement)
          }
        })
      }
      else {
      navigate('/success')
      }
      navigate('/success')
    }
  }

  const cardHandleChange = (event) => {
    const { error } = event
    setError(error ? error.message : '')
  }

  const cardStyle = {
    style: {
      base: {
        color: '#000',
        fontFamily: 'Roboto, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#606060',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }

  let cardOption

  if (cards) {
    cardOption = cards.map((card) => {
      const {
        card: { brand, last4, exp_month, exp_year },
      } = card
      return (
        <option key={card.id} value={card.id}>
          {`${brand}/ **** **** **** ${last4} ${exp_month}/${exp_year}`}
        </option>
      )
    })
    cardOption.unshift(
      <option key='Select a card' value=''>
        Select a card
      </option>
    )
  }

  return (
    <div>
      {user && cards && cards.length > 0 && (
        <div>
          <h4>Pay with saved card</h4>
          <select value={payment} onChange={(e) => setPaymentCard(e.target.value)}>
            {cardOption}
          </select>
        </div>
      )}
      <h4>Enter Payment Details</h4>
      <div className='stripe-card'>
        <CardNumberElement className='card-element' options={cardStyle} onChange={cardHandleChange} />
      </div>
      <div className='stripe-card'>
        <CardExpiryElement className='card-element' options={cardStyle} onChange={cardHandleChange} />
      </div>
      <div className='stripe-card'>
        <CardCvcElement className='card-element' options={cardStyle} onChange={cardHandleChange} />
      </div>
      {user && (
        <div className='saved-card'>
          <label>Save Card</label>
          <input type='checkbox' checked={saveCard} onChange={(e) => setSavedCard(e.target.checked)} />
        </div>
      )}
      <div className='submit-btn'>
        <button disabled={processing} className='button is-black nomad-btn submit' onClick={() => handleCheckout()}>
          {processing ? 'PROCESSING' : 'PAY'}
        </button>
      </div>
      {error && <p className='error-message'>{error}</p>}
    </div>
  )
}

export default CustomCheckout
