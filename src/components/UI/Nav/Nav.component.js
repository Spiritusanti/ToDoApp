// react imports
import { Fragment, useEffect } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../redux/auth-slice";
// firebase imports
import app from "../../../firebase/firebase";
// component imports
import { Link, useHistory, useLocation } from "react-router-dom";
// style imports
import classes from "./Nav.module.scss";

// menu that will conditionally render options based on user login status.
// will update as functionality is built in!
const Nav = () => {
  const userLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (userLoggedIn) {
      history.push("/tasks");
    }
  }, [userLoggedIn, history]);

  const signOutHandler = () => {
    app.auth().signOut();
    dispatch(authActions.userLogout(null));
  };
  const isAuthPage = location.pathname === "/signin";

  const content = (
    <ul className={classes.ul}>
      {!userLoggedIn ? (
        <li>
          <Link to={"/signin"}>Sign in/Sign up</Link>
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
  );

  return <nav>{isAuthPage ? null : content}</nav>;
};

export default Nav;
