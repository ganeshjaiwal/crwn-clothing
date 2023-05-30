import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "../categories.actions";
import {
  categoriesReducer,
  CATEGORIES_INITITAL_STATE,
} from "../categories.reducer";

describe("Categories Reducer Test Cases", () => {
  test("It should test featchCategoriesStart", () => {
    const expectedState = {
      ...CATEGORIES_INITITAL_STATE,
      isLoading: true,
    };
    expect(
      categoriesReducer(CATEGORIES_INITITAL_STATE, fetchCategoriesStart())
    ).toEqual(expectedState);
  });

  test("It should test featchCategoriesSuccess", () => {
    const mockData = [
      {
        title: "mens",
        imageUrl: "test",
        items: [
          {
            id: 1,
            name: "Product 1",
          },
          {
            id: 2,
            name: "Product 2",
          },
        ],
      },
      {
        title: "womens",
        imageUrl: "test",
        items: [
          {
            id: 3,
            name: "Product 3",
          },
          {
            id: 4,
            name: "Product 4",
          },
        ],
      },
    ];
    const expectedState = {
      ...CATEGORIES_INITITAL_STATE,
      isLoading: false,
      categoriesArray: mockData,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITITAL_STATE,
        fetchCategoriesSuccess(mockData)
      )
    ).toEqual(expectedState);
  });

  test("It should test featchCategoriesFailed", () => {
    const mockError = new Error("Error featching categories");
    const expectedState = {
      ...CATEGORIES_INITITAL_STATE,
      isLoading: false,
      error: mockError,
    };
    expect(
      categoriesReducer(
        CATEGORIES_INITITAL_STATE,
        fetchCategoriesFailed(mockError)
      )
    ).toEqual(expectedState);
  });
});
