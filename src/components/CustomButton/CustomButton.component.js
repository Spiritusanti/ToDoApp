import React from 'react';
import './CustomButton.styles.scss';
import { Link } from 'react-router-dom';


const CustomButton = ({ text, route }) => {
    return (
        <div className='custom-button-container'>  
            <Link to={route} > 
                <button>{text}</button>
            </Link>
        </div>
    );
}

export default CustomButton;