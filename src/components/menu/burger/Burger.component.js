// built following Maks Akymenko @ https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

import React from "react";
import "./Burger.styles.scss";

const Burger = ({ open, setOpen }) => {
  return (
    <button
      open={open}
      onClick={() => setOpen(!open)}
      className="burger-button"
    >
      <div
        style={
          open ? { transform: "rotate(45deg)" } : { transform: "rotate(0)" }
        }
      />
      <div
        style={
          open
            ? { transform: "translateX(20px)", opacity: 0 }
            : { transform: "translateX(0)", opacity: 1 }
        }
      />
      <div
        style={
          open ? { transform: "rotate(-45deg)" } : { transform: "rotate(0)" }
        }
      />
    </button>
  );
};

export default Burger;
