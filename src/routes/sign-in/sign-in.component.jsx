// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  //   auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
  //   useEffect(() => {
  //     const getRedirectResultAsync = async () => {
  //       const resp = await getRedirectResult(auth);
  //       if (resp) {
  //         const userDocRef = await createUserDocumentFromAuth(resp.user);
  //       }
  //     };
  //     getRedirectResultAsync();
  //   }, []);

  const signInWithGoogleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Component</h1>
      <Button buttonType="google" onClick={signInWithGoogleHandler}>
        SignIn With Google
      </Button>
      <br />
      {/* <button onClick={signInWithGoogleRedirect}>
        SignIn With Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
