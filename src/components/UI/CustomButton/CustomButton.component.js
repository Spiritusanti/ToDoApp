import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = (props) => {
  return (
    <div className="custom-button-container">
      <button type={props.type || 'button'}>{props.children}</button>
    </div>
  );
};

export default CustomButton;
