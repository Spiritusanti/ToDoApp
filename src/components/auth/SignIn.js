// react imports
import { useEffect } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth-slice";
// firebase imports
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, Auth } from "../../firebase/firebase";
// component imports
import Card from "../UI/Card/Card.component";
// style imports
import classes from "./SignIn.module.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const authObserver = Auth.onAuthStateChanged((user) => {
      if (user) {
        const info = {
          displayName: user.displayName,
          uid: user.uid,
        };
        dispatch(authActions.onLogIn(info));
      }
    });
    return authObserver();
  }, [dispatch]);

  return (
    <Card>
      <div className={classes.auth}>
        <h1>Please sign-in:</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Auth} />
      </div>
    </Card>
  );
};

export default SignIn;
