import { fireEvent, screen } from "@testing-library/react";
import * as ReactRedux from "react-redux";

import { renderWithProvider } from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";
import { signOutStart } from "../../../store/user/user.actions";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}))

describe("Navigation bar test cases", () => {
  test("Should check for sign in link and not sign out link if no currectUser", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: { currentUser: null },
      },
    });

    const signInElement = screen.getByText(/sign-in/i);
    expect(signInElement).toBeInTheDocument();

    const signOutElement = screen.queryByText(/sign out/i);
    expect(signOutElement).toBeNull();
  });

  test("Should check for sign out link and not sign in link if currectUser available", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: { currentUser: {} },
      },
    });

    const signOutElement = screen.getByText(/sign out/i);
    expect(signOutElement).toBeInTheDocument();

    const signInElement = screen.queryByText(/sign-in/i);
    expect(signInElement).toBeNull();
  });

  test("Should not render cart dropdown if isCartVisible is false", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: { currentUser: {} },
        cart: {
          cartItems: [],
          isCartVisible: false,
        },
      },
    });

    const goToCheckoutButtonElement = screen.queryByText(/go to checkout/i);
    expect(goToCheckoutButtonElement).toBeNull();
  });

  test("Should render cart dropdown if isCartVisible is true", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: { currentUser: {} },
        cart: {
          cartItems: [],
          isCartVisible: true,
        },
      },
    });

    const goToCheckoutButtonElement = screen.getByText(/go to checkout/i);
    expect(goToCheckoutButtonElement).toBeInTheDocument();
  });

  test("Should render cart dropdown with no items in cart", () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: { currentUser: {} },
        cart: {
          cartItems: [],
          isCartVisible: true,
        },
      },
    });

    const goToCheckoutButtonElement = screen.getByText(/go to checkout/i);
    expect(goToCheckoutButtonElement).toBeInTheDocument();

    const emptyCartElement = screen.getByText(/your cart is empty/i);
    expect(emptyCartElement).toBeInTheDocument();
  });

  test("it should dispatch signOutStart action when clicking on sign out link", async () => {
    const mockDispatch = jest.fn();
    jest.spyOn(ReactRedux, "useDispatch").mockReturnValue(mockDispatch);

    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: { currentUser: {} },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);
    expect(mockDispatch).toHaveBeenCalled();

    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);

    mockDispatch.mockClear();
  });
});
