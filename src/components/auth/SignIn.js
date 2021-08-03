// react imports
import { useEffect, useRef } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth-slice";
// firebase imports
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Auth } from "../../firebase/firebase";
// style imports
import classes from "./SignIn.module.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const [SignInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(Auth);

  useEffect(() => {
    if (user) {
      dispatch(authActions.userLogin(user));
    }
  }, [user, dispatch]);

  const signInHandler = () => {
    const email = enteredEmailRef.current.value;
    const password = enteredPasswordRef.current.value;
    SignInWithEmailAndPassword(email, password);
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
        <button style={{ background: "#4285F4", color: "White" }}>
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
