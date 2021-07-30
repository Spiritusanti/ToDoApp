// react imports
import { useEffect, useState } from "react";
// redux imports
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/auth-slice";
// firebase imports
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, Auth } from "../../firebase/firebase";
import firebase from "firebase";
// component imports
import Card from "../UI/Card/Card.component";
// style imports
import classes from "./SignIn.module.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState(null);
  console.log(userInfo);

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setUserInfo(user);
      });
    return () => unregisterAuthObserver();
  }, []);

  useEffect(() => {
    if (userInfo) {
      const { displayName, uid } = userInfo;
      dispatch(authActions.userLogin({ displayName, uid }));
    }
  }, [dispatch, userInfo]);

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
