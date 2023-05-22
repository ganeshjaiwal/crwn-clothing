import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
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

const CheckoutItem = ({ product }) => {
  const { imageUrl, name, quantity, price } = product;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const reduceQuantityByOne = () => {
    removeItemFromCart(product, product.quantity === 1);
  };

  const removeProductFromCart = () => {
    removeItemFromCart(product, true);
  };

  const incrementQuantityByOne = () => {
    addItemToCart(product);
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
