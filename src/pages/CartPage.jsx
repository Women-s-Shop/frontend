"use client"

import "../styles/cartpage.css"

const CartPage = ({ cartItems, onRemove }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h2>🛒 Your Cart</h2>
        <p className="empty-message">Your cart is empty.</p>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>
      <ul className="cart-list">
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>Price: <strong>${item.price}</strong></p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <h3>Total: <span>${totalPrice.toFixed(2)}</span></h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default CartPage
