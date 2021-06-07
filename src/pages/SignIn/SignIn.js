import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import LogIn from "../../components/SignIn_SignUp/LogIn/LogIn.component";
import SignUp from "../../components/SignIn_SignUp/SignUp/SignUp.component";
import "./SignIn.styles.scss";

const SignIn = () => {
  const [userAuth, setUserAuth] = useState({
    username: '', 
    email: '',
    password: ''
  });
  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  console.log(userAuth);

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
  };

  const handleRegister = (userCredentials) => {
    setUserAuth(userCredentials);
  };

  // Want to conditionally render sign in and sign up components based on user action

  return (
    <div className="signin-page">
      {!showLogIn && !showSignUp ? (
        <div>
          <CustomButton text={"Log In"} onHandleClick={triggerLogIn} />
          <CustomButton text={"Sign Up"} onHandleClick={triggerSignUp} />
        </div>
      ) : null}

      {showLogIn ? (
        <LogIn
          onHandleSubmit={handleLogIn}
          showLogIn={showLogIn}
          setShowLogIn={setShowLogIn}
        />
      ) : null}
      {showSignUp ? (
        <SignUp
          onHandleRegister={handleRegister}
          showSignUp={showSignUp}
          setShowSignUp={setShowSignUp}
        />
      ) : null}
    </div>
  );
};

export default SignIn;
