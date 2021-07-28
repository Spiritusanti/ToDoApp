// react imports
import { Fragment } from "react";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/authActions";
// component imports
import { Link } from "react-router-dom";
// style imports
import classes from "./Nav.module.scss";

// menu that will conditionally render options based on user login status.
// will update as functionality is built in!
const Nav = () => {
  const userLoggedIn = useSelector((state) => state.auth.userIsLoggedIn);
  const dispatch = useDispatch();

  const userSignedOut = () => {
    dispatch(logOut());
  };

  return (
    <nav>
      <ul className={classes.ul}>
        {userLoggedIn ? (
          <li>
            <Link to={"/"}>Sign in/Sign up</Link>
          </li>
        ) : (
          <Fragment>
            <li>
              <Link to={"/"} onClick={userSignedOut}>
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
