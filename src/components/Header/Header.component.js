import React from 'react';
import './Header.styles.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container'>
            <div className='title-container'>
                <h1>THINGS YOU NEED TO DO!</h1>
                <span>A not so average To Do App</span>
                <div className='nav'>
                    <Link to='/'>
                        <h3>HOME</h3>
                    </Link>
                    <Link to='/todo'>
                        <h3>My List</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;