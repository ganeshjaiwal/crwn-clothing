import { screen, fireEvent } from "@testing-library/react";

import { renderWithProvider } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("Product Card Test cases", () => {
  test("Should render product card with data", () => {
    const mockProduct = {
      id: 1,
      name: "Test 1",
      imageUrl: "test1",
      price: 10,
    };

    renderWithProvider(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    const productCardElement = screen.getByAltText(/test 1/i);
    expect(productCardElement).toBeInTheDocument();
  });

  test("Should render product card and add product to cart on button click", async () => {
    const mockProduct = {
      id: 1,
      name: "Test 1",
      imageUrl: "test1",
      price: 10,
    };

    const { store } = renderWithProvider(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
