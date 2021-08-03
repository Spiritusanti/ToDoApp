// component imports
import { Link } from "react-router-dom";
import Demo from "../components/Demo/Demo.component";
// style imports
import classes from "./Welcome.module.scss";

const Welcome = () => {
  return (
    <article className={classes.welcome}>
      <section>
        <h2>How it works</h2>
        <Demo />
        <div className={classes.demoToggle}>
          <Link to={'/signin'}>Sign Up!</Link>
        </div>
      </section>
    </article>
  );
};

export default Welcome;
