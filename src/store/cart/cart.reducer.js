import { CART_ACTIONS_TYPE } from "./cart.types";

const CART_INITILA_STATE = {
  isCartVisible: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITILA_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTIONS_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartVisible: payload,
      };
    default:
      return state;
  }
};
