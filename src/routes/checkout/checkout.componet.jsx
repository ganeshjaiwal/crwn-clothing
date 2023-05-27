import { useSelector } from "react-redux";
// import { useContext } from "react";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
// import { CartContext } from "../../context/cart.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout.styles.jsx";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

const Checkout = () => {
  // const { cartItems, totalCartValue } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const totalCartValue = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem product={item} key={item.id} />
      ))}

      <Total className="total">TOTAL: ${totalCartValue}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
