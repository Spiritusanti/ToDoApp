import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import LogIn from "../../components/SignIn_SignUp/LogIn/LogIn.component";
import SignUp from "../../components/SignIn_SignUp/SignUp/SignUp.component";
import "./SignIn.styles.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const triggerLogIn = () => {
    setShowLogIn(!showLogIn);
    setShowSignUp(false);
  };

  const triggerSignUp = () => {
    setShowSignUp(!showSignUp);
    setShowLogIn(false);
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    setPassword(password);
    setEmail(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setPassword(password);
    setUsername(username);
    setEmail(email);
  };

  // Want to conditionally render sign in and sign up components based on user action

  return (
    <div className="signin-page">
      {!showLogIn && !showSignUp ? (
        <div>
          <CustomButton text={"Log In"} handleClick={triggerLogIn} />
          <CustomButton text={"Sign Up"} handleClick={triggerSignUp} />
        </div>
      ) : null}

      {showLogIn ? (
        <LogIn
          handleSubmit={handleLogIn}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showLogIn={showLogIn}
          setShowLogIn={setShowLogIn}
        />
      ) : null}
      {showSignUp ? (
        <SignUp
          handleRegister={handleRegister}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
      ) : null}
    </div>
  );
};

export default SignIn;
