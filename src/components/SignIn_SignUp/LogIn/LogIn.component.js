import React, { useState } from "react";
import CustomButton from "../../CustomButton/CustomButton.component";
import "./LogIn.styles.scss";

const LogIn = ({ onUserInput, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const emailHandler = (event) => {
      setEmail(event.target.value);
  }

  const passwordHandler = (event) => {
      setPassword(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const credentials = {
      username: null,
      email: email,
      password: password
    }
    onUserInput(credentials);
    setEmail("");
    setPassword("");
  }


  return (
    <div className="log-in">
      <span
        className="close"
        onClick={submitHandler}
      ></span>
      <h2>Welcome Back!</h2>
      <form onSubmit={onUserInput}>
        <input
          placeholder="email"
          value={email}
          onChange={emailHandler}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={passwordHandler}
        />
      </form>
      <CustomButton handleClick={submitHandler}>Log In</CustomButton>
    </div>
  );
};

export default LogIn;
