import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item, quantity = 1) {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + quantity } : i
        );
      }
      return [...prev, { ...item, qty: quantity }];
    });
  }

  function removeFromCart(name) {
    setCart((prev) => prev.filter((i) => i.name !== name));
  }

  function updateQty(name, qty) {
    setCart((prev) =>
      prev.map((i) => (i.name === name ? { ...i, qty } : i))
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
} 