// component imports
import Demo from "../components/Demo/Demo.component";
import SignIn from "../components/auth/SignIn";

const Welcome = () => {
  return (
    <section>
      <h2>How it works</h2>
      <Demo />
      <h3>Sign up below!</h3>
      <SignIn />
    </section>
  );
};

export default Welcome;
