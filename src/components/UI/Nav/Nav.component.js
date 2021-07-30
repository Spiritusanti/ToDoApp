// react imports
import { Fragment } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/auth-slice";
// firebase imports
import app from "../../../firebase/firebase";
// component imports
import { Link } from "react-router-dom";
// style imports
import classes from "./Nav.module.scss";

// menu that will conditionally render options based on user login status.
// will update as functionality is built in!
const Nav = () => {
  const userLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    app.auth().signOut();
    const currentUser = app.auth().currentUser;
    dispatch(authActions.userLogout(currentUser));
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
            <li>
              <Link onClick={signOutHandler} to={"/"}>
                Signout
              </Link>
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
