import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      {cartItems.map(({ name, quntity, price, imageUrl }) => {
        return (
          <div>
            <span>{name}</span>
          </div>
        );
      })}
      <div className="cart-item"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
