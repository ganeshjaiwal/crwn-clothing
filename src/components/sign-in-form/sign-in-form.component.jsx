import { useState } from "react";
import { useDispatch } from "react-redux";

// import {
//   // signInWithGooglePopup,
//   // createUserDocumentFromAuth,
//   signInUserWithEmailAndPassword,
//   getUserDocumentFromUID,
// } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { ButtonContainer, SignInContainer } from "./sign-in-form.style.jsx";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../store/user/user.actions";

const defaultFormFields = {
  userName: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, password } = formFields;
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(userName, password));
      // const { user } = await signInUserWithEmailAndPassword(userName, password);
      // const userDetails = await getUserDocumentFromUID(user.uid);
      // console.log(userDetails);
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorect password for email");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(err.message);
          break;
      }
    }
  };

  const signInWithGoogleHandler = async () => {
    try {
      dispatch(googleSignInStart());
      // const { user } = await signInWithGooglePopup();
      // await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignIn}>
        <FormInput
          label="Email"
          type="email"
          required
          name="userName"
          onChange={handleChange}
          value={userName}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogleHandler}
          >
            SignIn With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
