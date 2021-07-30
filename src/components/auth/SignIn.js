// react imports
import { useEffect, useState } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/auth-slice";
// firebase imports
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, Auth } from "../../firebase/firebase";
import app from "../../firebase/firebase";
// component imports
import Card from "../UI/Card/Card.component";
// style imports
import classes from "./SignIn.module.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const userIsSignedIn = useSelector((state) => state.auth.userIsLoggedIn);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const unregisterAuthObserver = app.auth().onAuthStateChanged((user) => {
      setUserInfo(user);
    });
    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    if (userInfo && !userIsSignedIn) {
      dispatch(authActions.userLogin(userInfo));
    }
  }, [dispatch, userInfo, userIsSignedIn]);

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
