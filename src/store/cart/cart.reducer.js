import { createSlice } from "@reduxjs/toolkit";

const CART_INITILA_STATE = {
  isCartVisible: false,
  cartItems: [],
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

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITILA_STATE,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems = addProductToCart(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeProductFromCart(
        state.cartItems,
        action.payload.product,
        action.payload.removeProduct
      );
    },
    setIsCartVisble(state, action) {
      state.isCartVisible = action.payload;
    },
  },
});

export const { addItemToCart, removeItemFromCart, setIsCartVisble } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;

// import { CART_ACTIONS_TYPE } from "./cart.types";

// const CART_INITILA_STATE = {
//   isCartVisible: false,
//   cartItems: [],
// };

// export const cartReducer = (state = CART_INITILA_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CART_ACTIONS_TYPE.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
//       return {
//         ...state,
//         isCartVisible: payload,
//       };
//     default:
//       return state;
//   }
// };
