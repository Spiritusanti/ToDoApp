// built following Maks Akymenko @ https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import React from 'react';
import './Menu.styles.scss';
import { Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
    return (
        <nav className="nav" open={open} style={open ? {transform: "translateX(0)"} : {transform: "translateX(110%)"}}>
            <Link to="/" onClick={() => {setOpen(!open)}}>
                <span role="img" aria-label="home">Home</span>
            </Link>
            <Link to="/signin" onClick={() => {setOpen(!open)}}>
                <span role="img" aria-label="sign in">Sign In</span>
            </Link>
            <Link to="/todo" onClick={() => {setOpen(!open)}}>
                <span role="img" aria-label="my list">My List</span>
            </Link>
            <Link to="/todo" onClick={() => {setOpen(!open)}}>
            <span role="img" aria-label="my list">Sign Out</span>
        </Link>
        </nav>
    )
}

export default Menu;