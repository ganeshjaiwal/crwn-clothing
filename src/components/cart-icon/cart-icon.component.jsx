import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { setIsCartVisble, isCartVisible } = useContext(CartContext);

  const toggleCartOpenState = () => {
    setIsCartVisble(!isCartVisible);
  };

  return (
    <div className="cart-icon-container" onClick={toggleCartOpenState}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;