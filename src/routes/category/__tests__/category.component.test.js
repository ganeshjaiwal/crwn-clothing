import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../../utils/test/test.utils";
import Category from "../category.component";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("Category test cases", () => {
  test("It should render spinner if isLoading is true", () => {
    renderWithProvider(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categoriesArray: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("It should render product if isLoading is false", () => {
    renderWithProvider(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categoriesArray: [
            {
              title: "Mens",
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
          ],
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    const productElement = screen.getByText(/product 1/i);
    expect(productElement).toBeInTheDocument();
  });
});
