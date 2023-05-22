import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      setCurrentUser(user);
      navigate("/");
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
