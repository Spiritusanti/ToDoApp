// built following Maks Akymenko @ https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
// added state to handle future log in functionality
import React from "react";
import "./Menu.styles.scss";
import { Link } from "react-router-dom";

const Menu = ({ open, setOpen, isSignedIn, setisSignedIn }) => {
  return (
    <nav
      className="nav"
      open={open}
      style={
        open
          ? { transform: "translateX(0)" }
          : { transform: "translateX(110%)" }
      }
    >
      {isSignedIn ? (
        <div>
          <Link
            to="/todo"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span role="img" aria-label="my list">
              My List
            </span>
          </Link>
          <Link
            to="/"
            onClick={() => {
              setOpen(!open);
              setisSignedIn(!isSignedIn);
            }}
          >
            <span role="img" aria-label="my list">
              Sign Out
            </span>
          </Link>
        </div>
      ) : (
        <div>
          <Link
            to="/"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <span role="img" aria-label="home">
              Home
            </span>
          </Link>
          <Link
            to="/signin"
            onClick={() => {
              setOpen(!open);
              setisSignedIn(!isSignedIn);
            }}
          >
            <span role="img" aria-label="sign in">
              Sign In
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Menu;
