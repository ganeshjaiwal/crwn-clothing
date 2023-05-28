import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon as ShoppingIconStyle,
} from "./cart-icon.styles.jsx";
import {
  selectCartCount,
  selectCartIsOpen,
} from "../../store/cart/cart.selector";
import { setIsCartVisble } from "../../store/cart/cart.reducer";
// import { setIsCartVisble } from "../../store/cart/cart.actions";
// import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  // const { setIsCartVisble, isCartVisible, cartItemsCount } =
  // useContext(CartContext);
  const dispatch = useDispatch();
  const isCartVisible = useSelector(selectCartIsOpen);
  const cartItemsCount = useSelector(selectCartCount);

  const toggleCartOpenState = () => {
    dispatch(setIsCartVisble(!isCartVisible));
  };

  return (
    <CartIconContainer onClick={toggleCartOpenState}>
      <ShoppingIconStyle />
      <ItemCount>{cartItemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
