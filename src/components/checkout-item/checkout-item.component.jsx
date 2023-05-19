import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../context/cart.context";

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={reduceQuantityByOne}>
          &#10094;
        </div>
        <spam className="value"> {quantity} </spam>
        <div className="arrow" onClick={incrementQuantityByOne}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={removeProductFromCart}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
