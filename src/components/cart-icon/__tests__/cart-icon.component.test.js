import { screen } from "@testing-library/react";

import { renderWithProvider } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("Cart Icon tests", () => {
  test("User preloaded state to render", () => {
    const initalCartData = [
      { id: 1, name: "test 1", imageUrl: "test 1", price: 10, quantity: 1 },
      { id: 2, name: "test 2", imageUrl: "test 2", price: 20, quantity: 4 },
    ];

    renderWithProvider(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initalCartData,
        },
      },
    });

    const cartIconElement = screen.getByText("5");
    expect(cartIconElement).toBeInTheDocument();
  });
});
