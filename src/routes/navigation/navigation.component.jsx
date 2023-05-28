import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../store/user/user.selector";
// import { CartContext } from "../../context/cart.context";
// import { UserContext } from "../../context/user.context";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles.jsx";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.actions";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
  // const { isCartVisible } = useContext(CartContext);
  const isCartVisible = useSelector(selectCartIsOpen);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <NavigationContainer>
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        {currentUser ? (
          <NavLinks>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink as="span" onClick={() => dispatch(signOutStart())}>
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
