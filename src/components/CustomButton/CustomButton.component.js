import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({ text }) => {
    return (
        <div className='custom-button-container'>
            <button>{text}</button>
        </div>
    );
}

export default CustomButton;