const stripeAPI = require('../stripe')

function webhook(req, res) {
  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripeAPI.webhooks.constructEvent(
      req['rawBody'], sig, process.env.WEB_HOOK_SECRET)
      console.log('Here it is')
      console.log(event.type)
      console.log(event.data.object)
  } catch (error) {
    return res.status(400).send(`Webhook error ${error.message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    console.log('Event data', session)
  }
}

module.exports = webhook
