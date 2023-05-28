import { Routes, Route /* useNavigate */ } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./components/shop/shop.component";
import Checkout from "./routes/checkout/checkout.componet";
import { checkUserSession } from "./store/user/user.actions";
/* 
import {
  getCurrentUser,
  // onAuthStateChangedListner,
} from "./utils/firebase/firebase.utils";
*/

// import { setCurrentUser } from "./store/user/user.actions";

const App = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    // getCurrentUser();
    // const unsubscribe = onAuthStateChangedListner((user) => {
    //   dispatch(setCurrentUser(user));
    //   navigate("/");
    // });

    // return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
