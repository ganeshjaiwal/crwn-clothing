import { createContext, useEffect, useState } from "react";

import {
  // addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: [],
  setCategories: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);
  const value = { categoriesMap, setCategoriesMap };

  // useEffect(() => {
  //   // setProducts(PRODUCTS);
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategoriesMap(categories);
    };

    getData();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
