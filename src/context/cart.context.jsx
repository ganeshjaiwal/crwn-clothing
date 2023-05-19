import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartVisible: false,
  cartItemsCount: 0,
  setIsCartVisble: () => null,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  totalCartValue: 0,
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

const removeProductFromCart = (cartItems, product, removeProduct) => {
  // Delete product completely
  if (removeProduct) {
    return cartItems.filter((item) => {
      if (item.id !== product.id) return true;
    });
  }

  // Reduce quantity of product
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      item.quantity--;
    }
  });
  return [...cartItems];
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisble] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalCartValue, setTotalCartValue] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartItemsCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const totalCartValueCount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalCartValue(totalCartValueCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addProductToCart(cartItems, productToAdd));
  };

  const removeItemFromCart = (product, removeProduct) => {
    setCartItems(removeProductFromCart(cartItems, product, removeProduct));
  };

  const value = {
    cartItems,
    isCartVisible,
    addItemToCart,
    setIsCartVisble,
    cartItemsCount,
    removeItemFromCart,
    totalCartValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
