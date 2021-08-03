// Router imports
import { Link } from "react-router-dom";
// component import
import Card from "../components/UI/Card/Card.component";
import SignIn from "../components/auth/SignIn";
// style imports
import classes from "./Auth.module.scss";
import SignUp from "../components/auth/SignUp";

const AuthPage = () => {
  return (
    <section>
      <Card>
        <div className={classes.btnContainer}>
          <Link to={"/"}>&#10006;</Link>
        </div>
        <div className={classes.forms}>
          <SignIn />
          <SignUp />
        </div>
      </Card>
    </section>
  );
};

export default AuthPage;
