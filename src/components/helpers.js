export function isInCart (product, cartItems) {
  return cartItems.find(item => item.id === product.id)
}