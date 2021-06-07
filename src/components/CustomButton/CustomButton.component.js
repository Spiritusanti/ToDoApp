import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({ onClick, ...props }) => {
  return (
    <div className="custom-button-container">
      <button onClick={onClick}>{props.children}</button>
    </div>
  );
};

export default CustomButton;
