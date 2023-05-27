import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import Category from "../../routes/category/category.component";
import { useEffect } from "react";
import { fetchCategoriesAsync } from "../../store/categories/categories.actions";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // const getData = async () => {
    //   const categories = await getCategoriesAndDocuments();
    //   dispatch(setCategories(categories));
    // };

    // getData();
    dispatch(fetchCategoriesAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;