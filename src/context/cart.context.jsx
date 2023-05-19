import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartVisible: false,
  setIsCartVisble: () => null,
  setCartItems: () => null,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisble] = useState(false);

  const value = { cartItems, isCartVisible, setCartItems, setIsCartVisble };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
