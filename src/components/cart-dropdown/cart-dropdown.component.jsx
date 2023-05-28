import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";

import Button from "../button/button.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartVisble } from "../../store/cart/cart.reducer";
// import { setIsCartVisble } from "../../store/cart/cart.actions";
// import { CartContext } from "../../context/cart.context";

const CartDropdown = () => {
  // const { cartItems, setIsCartVisble } = useContext(CartContext);
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const navigateToChekout = () => {
    dispatch(setIsCartVisble(false));
    navigate("/checkout");
  };

  console.log("Cart Items: ", cartItems);
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => {
            return (
              <div key={item.id}>
                <CartItem cartItem={item} />
              </div>
            );
          })
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={navigateToChekout}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
