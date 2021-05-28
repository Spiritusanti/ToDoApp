import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton.component";
import "./SplashPage.styles.scss";

const SplashPage = () => {
  return (
    <div className="sp-container">
      <div className="sp-content">
        <Link to="./signin">
          <CustomButton text={"Get Started"} />
        </Link>
      </div>
    </div>
  );
};

export default SplashPage;
