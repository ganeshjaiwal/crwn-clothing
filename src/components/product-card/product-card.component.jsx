import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  Img,
  Footer,
  ProductCardContainer,
  AddToCartButton,
} from "./product-card.styles";
import { addItemToCart } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { CartContext } from "../../context/cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItem = useSelector(selectCartItems);
  const dispatch = useDispatch();
  // const { addItemToCart } = useContext(CartContext);

  const addItemToCartHandler = () => {
    dispatch(addItemToCart(cartItem, product));
  };

  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <AddToCartButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemToCartHandler}
      >
        Add to cart
      </AddToCartButton>
    </ProductCardContainer>
  );
};

// "id": 4,
// "name": "Grey Brim",
// "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
// "price": 25

export default ProductCard;
