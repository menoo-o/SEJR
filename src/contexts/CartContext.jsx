// src/contexts/CartContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage when the component mounts
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const [showCartAlert, setShowCartAlert] = useState(false); // State to control cart alert visibility

  useEffect(() => {
    // Save cart items to localStorage whenever the cartItems state changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (item, weight, quantity) => {
    console.log('Adding item to cart:', item);

    // Compute the correct price based on the weight
    const basePrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    let priceMultiplier = 1;

    if (weight === '500g') priceMultiplier = 2;
    if (weight === '1kg') priceMultiplier = 4;

    const totalPrice = (basePrice * priceMultiplier).toFixed(2);

    const newItem = {
      ...item,
      weight,
      quantity,
      totalPrice: `$${totalPrice}`,  // Store as a string with a currency symbol
      price: totalPrice, // Store the raw numeric price for calculations
    };

    setCartItems((prevItems) => {
      // Check if the item with the same weight is already in the cart
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.weight === weight
      );

      if (existingItemIndex !== -1) {
        // If item exists, increment the quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += quantity;
        return updatedItems;
      } else {
        // If item does not exist, add it to the cart
        return [...prevItems, newItem];
      }
    });

    // Show the alert when an item is added
    setShowCartAlert(true);

    // Hide the alert after 3-4 seconds
    setTimeout(() => {
      setShowCartAlert(false);
    }, 3000);
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateItemQuantity = (index, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = quantity;
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, updateItemQuantity, showCartAlert }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
