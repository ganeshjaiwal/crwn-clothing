import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems, setIsCartVisble } = useContext(CartContext);

  const navigate = useNavigate();

  const navigateToChekout = () => {
    setIsCartVisble(false);
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
