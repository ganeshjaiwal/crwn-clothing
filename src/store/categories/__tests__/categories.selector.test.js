import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../categories.selector";

const mockState = {
  categories: {
    isLoading: false,
    categoriesArray: [
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
    ],
  },
};

describe("Categories Selector Test Cases", () => {
  test("Should test selectCtegories", () => {
    const expectedCategories = [
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
    expect(selectCategories(mockState)).toEqual(expectedCategories);
  });

  test("Should test selectCategoriesIsLoading", () => {
    expect(selectCategoriesIsLoading(mockState)).toEqual(false);
  });

  test("Should test selectCategoriesMap and return category map with itesm array", () => {
    const expectedMap = {
      mens: [
        {
          id: 1,
          name: "Product 1",
        },
        {
          id: 2,
          name: "Product 2",
        },
      ],
      womens: [
        {
          id: 3,
          name: "Product 3",
        },
        {
          id: 4,
          name: "Product 4",
        },
      ],
    };

    expect(selectCategoriesMap(mockState)).toEqual(expectedMap);
  });
});
