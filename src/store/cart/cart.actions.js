import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTIONS_TYPE } from "./cart.types";

// export const setCartItem = (cartItem) =>
//   createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, cartItem);

export const setIsCartVisble = (state) =>
  createAction(CART_ACTIONS_TYPE.SET_IS_CART_OPEN, state);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addProductToCart(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, product, removeProduct) => {
  const newCartItems = removeProductFromCart(cartItems, product, removeProduct);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
};

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
      if (item.id !== product.id) {
        return true;
      }
      return false;
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
