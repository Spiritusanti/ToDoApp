// built following Maks Akymenko @ https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import React from 'react';
import './Menu.styles.scss';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
    return (
        <nav className="nav" open={open} style={open ? {transform: "translateX(0)"} : {transform: "translateX(110%)"}}>
            <Link to="/">
                <span role="img" aria-label="home">Home</span>
            </Link>
            <Link to="/todo">
                <span role="img" aria-label="home">My List</span>
            </Link>
        </nav>
    )
}

export default Menu;