import firebase from "firebase";
import firebaseConfig from "../config/firebaseConfig";

const app = firebase.initializeApp(firebaseConfig);

// googleSignIn Popup
export const googleSignInPopup = async (provider) => {
  const user = await firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = {
        uid: result.user.uid,
        displayName: result.user.displayName,
        token: result.user.getIdToken,
      };
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      console.log(errorCode, errorMessage, email);
    });
  return user;
};

// firebase exports
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const Auth = firebase.auth();
export const database = app.database();

export default app;
