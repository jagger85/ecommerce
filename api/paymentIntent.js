const stripeAPI = require('../stripe')

function calculateOrderAmount(cartItems){


  return cartItems.reduce((total, product)=>{
    return total + product.price * product.quantity;
  },0) * 100 // Multiply by 100 because is calculated in cents
}


async function paymentIntent(req, res) {
  //For security reasons calculate the total amount here on the backend
  const { cartItems, description, receipt_email, shipping, delivery } = req.body
  let paymentIntent

  try {
    const itemsAmount = calculateOrderAmount(cartItems) 
    paymentIntent = await stripeAPI.paymentIntents.create({
      amount: itemsAmount + itemsAmount%21 + delivery,
      amount_details:{
        "Items amount": itemsAmount,
        "Vat 12%": itemsAmount % 21,
        "Delivery service": delivery
      },
      currency: 'usd',
      description,
      payment_method_types: ['card'],
      receipt_email,
      shipping,
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret, id: paymentIntent.id })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'an error occured, unable to create payment intent' })
  }
}

module.exports = paymentIntent