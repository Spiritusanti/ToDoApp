import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({ text, handleClick }) => {
    return (
        <div className='custom-button-container'>  
                <button onClick={handleClick}>{text}</button>
        </div>
    );
}

export default CustomButton;