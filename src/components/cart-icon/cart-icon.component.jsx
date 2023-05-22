import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon as ShoppingIconStyle,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { setIsCartVisble, isCartVisible, cartItemsCount } =
    useContext(CartContext);

  const toggleCartOpenState = () => {
    setIsCartVisble(!isCartVisible);
  };

  return (
    <CartIconContainer onClick={toggleCartOpenState}>
      <ShoppingIconStyle />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
