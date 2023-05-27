import { useSelector } from "react-redux";
import { Fragment } from "react";

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
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
          </h2>
          <Preview>
            {products
              .filter((_, index) => index < 4)
              .map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </Preview>
        </Fragment>
      )}
    </CategoryPreviewContainer>
  );
};
export default CategoryPreview;
