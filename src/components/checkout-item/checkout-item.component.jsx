import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  NamePrice,
  Arrow,
  Quantity,
  Img,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.reducer.js";
// import {
//   addItemToCart,
//   removeItemFromCart,
// } from "../../store/cart/cart.actions.js";
// import { CartContext } from "../../context/cart.context";

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  const dispatch = useDispatch();
  // const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);

  const reduceQuantityByOne = () => {
    dispatch(
      removeItemFromCart({ product, removeProduct: product.quantity === 1 })
    );
    // dispatch(removeItemFromCart(cartItems, product, product.quantity === 1));
  };

  const removeProductFromCart = () => {
    dispatch(removeItemFromCart({ product, removeProduct: true }));
    // dispatch(removeItemFromCart(cartItems, product, true));
  };

  const incrementQuantityByOne = () => {
    dispatch(addItemToCart(product));
    // dispatch(addItemToCart(cartItems, product));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={name} />
      </ImageContainer>
      <NamePrice> {name} </NamePrice>
      <Quantity>
        <Arrow onClick={reduceQuantityByOne}>&#10094;</Arrow>
        <Value> {quantity} </Value>
        <Arrow onClick={incrementQuantityByOne}>&#10095;</Arrow>
      </Quantity>
      <NamePrice> {price} </NamePrice>
      <RemoveButton onClick={removeProductFromCart}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
