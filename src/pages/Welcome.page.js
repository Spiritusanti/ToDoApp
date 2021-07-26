// react imports
import { useState } from "react";
// component imports
import Demo from "../components/Demo/Demo.component";
import SignIn from "../components/auth/SignIn";
// style imports
import classes from "./Welcome.module.scss";
import Card from "../components/UI/Card/Card.component";

const Welcome = () => {
  const [showDemo, setShowDemo] = useState(false);

  const showDemoHandler = () => {
    setShowDemo(true);
  };

  const hideDemoHandler = () => {
    setShowDemo(false);
  };

  return (
    <article className={classes.welcome}>
      {!showDemo && (
        <Card>
          <div class={classes.demoToggle}>
            <h2>see it in action!</h2>
            <button onClick={showDemoHandler}>Try the demo!</button>
          </div>
        </Card>
      )}
      {showDemo && (
        <section>
          <h2>How it works</h2>
          <Demo />
          <div class={classes.demoToggle}>
            <button onClick={hideDemoHandler}>Hide Demo</button>
          </div>
        </section>
      )}
      <section>
        <h2>Sign up below!</h2>
        <SignIn />
      </section>
    </article>
  );
};

export default Welcome;
