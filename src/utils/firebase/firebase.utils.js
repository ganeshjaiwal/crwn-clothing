import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

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

export const getUserDocumentFromUID = async (uid) => {
  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    alert("User not found in database");
    return;
  }
  return userSnapshot.data();
};

export const signupUserAuthWithUserNameAndPassword = async (
  userName,
  password
) => {
  if (!userName || !password) return;
  return await createUserWithEmailAndPassword(auth, userName, password);
};

export const signInUserWithEmailAndPassword = async (userName, password) => {
  if (!userName || !password) return;
  return await signInWithEmailAndPassword(auth, userName, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);