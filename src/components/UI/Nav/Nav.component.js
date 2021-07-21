import { Link } from "react-router-dom";
import classes from './Nav.module.scss'
// menu that will conditionally render options based on user login status.
// will update as functionality is built in!
const Nav = () => {
  return (
    <nav>
      <ul className={classes.ul}>
        <li>
          <Link to={'/'}>Login</Link>
        </li>
        <li>
          <Link to={'/'}>Demo</Link>
        </li>
        <li>
          <Link to={'/'}>Logout</Link>
        </li>
        <li>
          <Link to={'/'}>Tasks</Link>
        </li>
        <li>
          <Link to={'/'}>Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
