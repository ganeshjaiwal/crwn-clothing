import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const signInWithGoogleHandler = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Sign In Component</h1>
      <button onClick={signInWithGoogleHandler}>SignIn With Google</button>
    </div>
  );
};

export default SignIn;
