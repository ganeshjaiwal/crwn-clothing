import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log("Cart Items: ", cartItems);
  return (
    <div className="cart-dropdown-container">
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <CartItem cartItem={item} />
          </div>
        );
      })}
      <div className="cart-item"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
