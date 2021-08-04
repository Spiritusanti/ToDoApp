// react imports
import { useEffect, useRef, useState } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth-slice";
// firebase imports
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import app, {
  Auth,
  googleAuthProvider,
  googleSignInPopup,
} from "../../firebase/firebase";
// style imports
import classes from "./SignIn.module.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const enteredConfirmPasswordRef = useRef();
  const [passwordError, setPasswordError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(Auth);

  // user dispatch
  useEffect(() => {
    if (user) {
      dispatch(authActions.userLogin(user));
    }
    if (userInfo) {
      dispatch(authActions.userLogin(userInfo));
    }
  }, [user, userInfo, dispatch]);

  // confirm password check
  useEffect(() => {
    const passwordIsConfirmed =
      enteredPasswordRef.current.value ===
      enteredConfirmPasswordRef.current.value;
    if (!passwordIsConfirmed) {
      setPasswordError("Passwords do not match!");
    }
  }, []);

  //   signup handler
  const signUpHandler = () => {
    if (!passwordError) {
      const email = enteredEmailRef.current.value;
      const password = enteredPasswordRef.current.value;
      createUserWithEmailAndPassword(email, password);
    }
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
    <form className={classes.auth}>
      <h1>sign-up</h1>
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
        <li>
          <label htmlFor="confirm-password">Confirm password:</label>
          <input
            type="password"
            id="confirm-password"
            ref={enteredConfirmPasswordRef}
            minLength="6"
          />
        </li>
      </ul>
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      <div className={classes.btnContainer}>
        <button onClick={signUpHandler}>Sign-Up</button>
        <button
          style={{ background: "#4285F4", color: "White" }}
          onClick={googleSignInHandler}
        >
          Google Sign-In
        </button>
      </div>
    </form>
  );
};

export default SignUp;
