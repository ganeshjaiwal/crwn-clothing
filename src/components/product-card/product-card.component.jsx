import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product: { name, price, imageUrl } }) => {
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to cart</Button>
    </div>
  );
};

// "id": 4,
// "name": "Grey Brim",
// "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
// "price": 25

export default ProductCard;
