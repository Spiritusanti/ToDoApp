import firebase from "firebase";
import firebaseConfig from "../config/firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  signInSuccessUrl: "/tasks",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

export const Auth = firebase.auth();

export default app;
