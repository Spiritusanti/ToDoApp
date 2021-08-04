import firebase from "firebase";
import firebaseConfig from "../config/firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

// googleSignIn Popup
export const googleSignInPopup = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
};

// firebase exports
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const Auth = firebase.auth();
export const database = app.database();

export default app;
