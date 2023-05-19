import { useContext } from "react";

import Button from "../button/button.component";
import "./product-card.styles.scss";
import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
};

// "id": 4,
// "name": "Grey Brim",
// "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
// "price": 25

export default ProductCard;
