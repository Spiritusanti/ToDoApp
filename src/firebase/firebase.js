import firebase from "firebase/app";
import firebaseConfig from "../config/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const uiConfig = {
    signInSuccessUrl: "/todo",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
  };

export const Auth = firebase.auth();

export default firebase;
