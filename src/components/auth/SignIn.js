// library imports
import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, Auth } from "../../firebase/firebase";
// component imports
import Card from "../UI/Card/Card.component";
// style imports
import classes from "./SignIn.module.scss";

const SignIn = () => {
  return (
    <Card>
      <div class={classes.auth}>
        <h1>Todo App</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Auth} />
      </div>
    </Card>
  );
};

export default SignIn;
