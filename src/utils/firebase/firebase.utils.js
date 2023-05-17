import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSHAohHwbP3yuZTKctwWomCn9j4zVRlLc",
  authDomain: "crwn-clothing-db-react-zmt.firebaseapp.com",
  projectId: "crwn-clothing-db-react-zmt",
  storageBucket: "crwn-clothing-db-react-zmt.appspot.com",
  messagingSenderId: "54926755805",
  appId: "1:54926755805:web:3d4cd29752b72ca1f69834",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    // Data not available
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("Error creating User: ", err.message);
    }
  }

  return;
};
