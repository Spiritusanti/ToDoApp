// react imports
import { useState, Fragment } from "react";
// component imports
import { Link } from "react-router-dom";
// style imports
import classes from "./Nav.module.scss";

// menu that will conditionally render options based on user login status.
// will update as functionality is built in!
const Nav = () => {
  // temporary functionality
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const userSignedIn = () => {
    setUserLoggedIn(true);
  }

  const userSignedOut = () => {
    setUserLoggedIn(false)
  }

  return (
    <nav>
      <ul className={classes.ul}>
        {!userLoggedIn ? (
          <li>
            <Link to={"/tasks"} onClick={userSignedIn}>Login</Link>
          </li>
        ) : (
          <Fragment>
            <li>
              <Link to={"/"} onClick={userSignedOut}>Logout</Link>
            </li>
            <li>
              <Link to={"/"}>Tasks</Link>
            </li>
            <li>
              <Link to={"/"}>Profile</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
