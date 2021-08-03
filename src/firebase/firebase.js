import firebase from "firebase";
import firebaseConfig from "../config/firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

export const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/tasks",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};

export const Auth = firebase.auth();
export const database = app.database();

export default app;
