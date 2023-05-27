import { useSelector } from "react-redux";

import ProductCard from "../product-card/product-card.component";
import { selectCategoriesIsLoading } from "../../store/categories/categories.selector";

import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles.jsx";
import Spinner from "../spinner/spinner.component";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <Preview>
          {products
            .filter((_, index) => index < 4)
            .map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </Preview>
      )}
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
