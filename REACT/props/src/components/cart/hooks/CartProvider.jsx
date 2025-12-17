import { CartContext } from "./CartContext";
import React from "react";

const CartProvider = ({ children }) => {
  const addToCart = () => {};

  const removeFromCart = () => {};

  const updateCart = () => {};

  const value = {
    addToCart,
    removeFromCart,
    updateCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
