import { StyledFirebaseAuth } from "react-firebaseui";
import { uiConfig, Auth } from "../../firebase/firebase";
import Card from "../UI/Card/Card.component";

const SignIn = () => {
  return (
    <Card>
      <h1>Todo App</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Auth} />
    </Card>
  );
};

export default SignIn;
