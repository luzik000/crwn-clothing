import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCb6ITaheCAs--SNUeGOV7qZJ-1oZBaUsQ",
  authDomain: "crwn-db-1d191.firebaseapp.com",
  databaseURL: "https://crwn-db-1d191.firebaseio.com",
  projectId: "crwn-db-1d191",
  storageBucket: "crwn-db-1d191.appspot.com",
  messagingSenderId: "419678763399",
  appId: "1:419678763399:web:2d2f83fe2c05198b60fb22",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
