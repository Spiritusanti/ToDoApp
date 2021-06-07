import { useState } from 'react';
import CustomButton from "../../CustomButton/CustomButton.component";
import "./SignUp.styles.scss";

const SignUp = ({ onHandleSubmit, showSignUp, setShowSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  }

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const userCredentials = {
      username: username,
      email: email,
      password: password
    }

    onHandleSubmit(userCredentials);

  }

  return (
    <div className="signup">
      <div className="close" onClick={() => setShowSignUp(!showSignUp)}></div>
      <h2>Welcome to the club!</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          value={username}
          onChange={usernameHandler}
        />
        <input
          placeholder="email"
          value={email}
          onChange={emailHandler}
        />
        <input
          placeholder="create password"
          type="password"
          value={password}
          onChange={passwordHandler}
        />
        <input placeholder="confirm password" type="password" />
        <CustomButton text="sign up" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default SignUp;
