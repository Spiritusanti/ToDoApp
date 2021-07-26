// component imports
import Nav from "../Nav/Nav.component";
import { Link } from "react-router-dom";
// style imports
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <h1>
          <Link to="/">Checklist</Link>
        </h1>
        <span>A not so average To Do App</span>
      </div>
      <div>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
