// react imports
import { useEffect, useRef, useState } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth-slice";
// firebase imports
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import app, {
  Auth,
  googleSignInPopup,
  googleAuthProvider,
} from "../../firebase/firebase";
// style imports
import classes from "./SignIn.module.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const [userInfo, setUserInfo] = useState(null);
  const [SignInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(Auth);

  // redux dispatch
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (userInfo) {
        dispatch(authActions.userLogin(userInfo));
      }
      if (user) {
        dispatch(authActions.userLogin(user));
      }
    }
    return () => (mounted = false);
  }, [userInfo, user, dispatch]);

  // email and password auth handler
  const signInHandler = () => {
    const email = enteredEmailRef.current.value;
    const password = enteredPasswordRef.current.value;
    SignInWithEmailAndPassword(email, password);
  };

  // google auth handler
  const googleSignInHandler = () => {
    if (app.auth().currentUser) {
      setUserInfo(app.auth().currentUser);
    }
    googleSignInPopup(googleAuthProvider);
    setUserInfo(app.auth().currentUser);
  };

  if (loading) {
    return <p>Loading ...</p>;
  }
  return (
    <div className={classes.auth}>
      <h1>sign-in</h1>
      <ul>
        <li>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" ref={enteredEmailRef} />
        </li>
        <li>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            ref={enteredPasswordRef}
            minLength="6"
          />
        </li>
      </ul>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <div className={classes.btnContainer}>
        <button onClick={signInHandler}>Sign-In</button>
        <button
          style={{ background: "#4285F4", color: "White" }}
          onClick={googleSignInHandler}
        >
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
