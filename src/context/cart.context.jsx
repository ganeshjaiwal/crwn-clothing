import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartVisible: false,
  cartItemsCount: 0,
  setIsCartVisble: () => null,
  addItemToCart: () => {},
});

const addProductToCart = (cartItems, product) => {
  // If product is already in cart
  let isItemExist = false;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      isItemExist = true;
      item.quantity++;
    }
  });
  if (isItemExist) {
    return [...cartItems];
  }

  // If cart is not ampty and product is not added alredy OR
  // if Cart is empty
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisble] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartItemsCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addProductToCart(cartItems, productToAdd));
  };

  const value = {
    cartItems,
    isCartVisible,
    addItemToCart,
    setIsCartVisble,
    cartItemsCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
