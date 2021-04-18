import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({ text, action, handleClick }) => {
    return (
        <div className='custom-button-container'>  
                <button type={action} onClick={handleClick}>{text}</button>
        </div>
    );
}

export default CustomButton;