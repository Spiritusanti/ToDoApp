// react imports
import { Fragment } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/auth-slice";
// firebase imports
import firebase from "firebase";
// component imports
import { Link } from "react-router-dom";
// style imports
import classes from "./Nav.module.scss";


// menu that will conditionally render options based on user login status.
// will update as functionality is built in!
const Nav = () => {
  const userLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
  console.log(userLoggedIn);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(authActions.userLogout);
    firebase.auth().signOut();
  };

  return (
    <nav>
      <ul className={classes.ul}>
        {!userLoggedIn ? (
          <li>
            <Link to={"/"}>Sign in/Sign up</Link>
          </li>
        ) : (
          <Fragment>
            <li onClick={signOutHandler}>
              <Link to={"/"}>Signout</Link>
            </li>
            <li>
              <Link to={"/tasks"}>Tasks</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
