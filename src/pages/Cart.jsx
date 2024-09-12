// src/pages/Cart.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, removeItem, updateItemQuantity } = useCart();

  // Function to calculate the total for a single item
  const calculateTotal = (price, qty) => {
    const numericPrice = parseFloat(price); // Ensure price is a number
    return (numericPrice * qty).toFixed(2); // Calculate and format to 2 decimal places
  };

  // Function to calculate the subtotal for all items in the cart
  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => {
      const itemTotal = parseFloat(calculateTotal(item.price, item.quantity)); // Convert to number for summation
      return subtotal + itemTotal;
    }, 0).toFixed(2); // Format subtotal to 2 decimal places
  };

  return (
    <>
      <div className="cart-heading">
        <h2>Your Cart</h2>
        <NavLink to='/' className='cart-shopping-link'>Continue Shopping</NavLink>
      </div>
      <div className="cart-container">
        <div className="cart-header">
          <div className="cart-column">Product</div>
          <div className="cart-column">Price</div>
          <div className="cart-column">Qty</div>
          <div className="cart-column">Total</div>
        </div>
        {cartItems.length === 0 ? (
          <p className='empty-cart'>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item-row">
              <div className="cart-item cart-product">
                <img src={item.imgSrc} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>Size: {item.weight}</p>
                  <button onClick={() => removeItem(index)} className="remove-btn">
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-item cart-price">${item.price}</div>
              <div className="cart-item cart-qty">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateItemQuantity(index, Number(e.target.value))}
                  className="quantity-input"
                />
              </div>
              <div className="cart-item cart-total">
                ${calculateTotal(item.price, item.quantity)}
              </div>
            </div>
          ))
        )}

        <div className="cart-subtotal">
          <div className="cart-column">Subtotal:</div>
          <div className="cart-column"></div>
          <div className="cart-column"></div>
          <div className="cart-column">${calculateSubtotal()}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
