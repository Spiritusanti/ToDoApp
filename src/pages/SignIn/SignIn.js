import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import LogIn from "../../components/SignIn_SignUp/LogIn/LogIn.component";
import SignUp from "../../components/SignIn_SignUp/SignUp/SignUp.component";
import "./SignIn.styles.scss";

const SignIn = () => {
  const [userAuth, setUserAuth] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(userAuth);

  const [showLogIn, setShowLogIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const triggerLogIn = () => {
    setShowLogIn(true);
    setShowSignUp(false);
  };

  const triggerSignUp = () => {
    setShowSignUp(true);
    setShowLogIn(false);
  };

  const closeInputCard = () => {
    setShowLogIn(false);
    setShowSignUp(false);
  };

  const handleUserAuth = (userCredentials) => {
    setUserAuth(userCredentials);
    closeInputCard();
  };

  // Want to conditionally render sign in and sign up components based on user action

  return (
    <div className="signin-page">
      {!showLogIn && !showSignUp ? (
        <div>
          <CustomButton onClick={triggerLogIn}>Log In</CustomButton>
          <CustomButton onClick={triggerSignUp}>Sign Up</CustomButton>
        </div>
      ) : null}

      {showLogIn ? (
        <LogIn onUserInput={handleUserAuth} onClose={closeInputCard} />
      ) : null}
      {showSignUp ? (
        <SignUp onUserInput={handleUserAuth} onClose={closeInputCard} />
      ) : null}
    </div>
  );
};

export default SignIn;
