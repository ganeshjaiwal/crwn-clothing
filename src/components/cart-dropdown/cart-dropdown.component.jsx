import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";
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
    <div className="cart-dropdown-container">
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <CartItem cartItem={item} />
          </div>
        );
      })}
      <div className="cart-item"></div>
      <Button onClick={navigateToChekout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
