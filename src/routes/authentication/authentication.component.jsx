// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

const Authentication = () => {
  //   useEffect(() => {
  //     const getRedirectResultAsync = async () => {
  //       const resp = await getRedirectResult(auth);
  //       if (resp) {
  //         const userDocRef = await createUserDocumentFromAuth(resp.user);
  //       }
  //     };
  //     getRedirectResultAsync();
  //   }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
