import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

const uiConfig = {
  signInFlow: "redirect",
  signInSuccessUrl: "/todo",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const SignInSignUp = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default SignInSignUp;
