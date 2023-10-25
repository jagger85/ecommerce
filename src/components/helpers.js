export function isInCart(product, cartItems) {
  return cartItems.find((item) => item.id === product.id)
}

const API = 'https://stripe-store-invp.onrender.com'

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts }
  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
}
