import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartVisible } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        {currentUser ? (
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
            <CartIcon />
          </NavLinks>
        ) : (
          <NavLinks>
            <NavLink to="/auth">SIGN-IN</NavLink>
          </NavLinks>
        )}
        {isCartVisible && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
