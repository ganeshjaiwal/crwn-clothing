// Migrated this to react-redux pattern

// import { createContext, useState, useEffect, useReducer } from "react";
// import { useNavigate } from "react-router-dom";

// import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";
// import { createAction } from "../utils/reducer/reducer.utils";

// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// // ADDED INTO STORE/USER-REDUCER
// // const USER_ACTION_TYPES = {
// //   SET_CURRENT_USER: "SET_CURRENT_USER",
// // };

// // const userReducer = (state, action) => {
// //   const { type, payload } = action;

// //   switch (type) {
// //     case USER_ACTION_TYPES.SET_CURRENT_USER:
// //       return {
// //         currentUser: payload,
// //       };
// //     default:
// //       throw Error(`Unhadeled type: ${type}`);
// //   }
// // };

// // const INITIAL_STATE = {
// //   currentUser: null,
// // };

// export const UserProvider = ({ children }) => {
//   // MOVING TO App.js as not using User Provider
//   // const navigate = useNavigate();
//   // useEffect(() => {
//   //   const unsubscribe = onAuthStateChangedListner((user) => {
//   //     setCurrentUser(user);
//   //     navigate("/");
//   //   });

//   //   return unsubscribe;
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);
//   // const [currentUser, setCurrentUser] = useState(null);
//   // const [/*state*/ { currentUser }, dispatch] = useReducer(
//   //   userReducer,
//   //   INITIAL_STATE
//   // );

//   const setCurrentUser = (user) => {
//     // dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//   };

//   // const value = { currentUser, setCurrentUser };

//   // return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };
