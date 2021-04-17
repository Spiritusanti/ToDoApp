import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({ text, action, handleCLick }) => {
    return (
        <div className='custom-button-container'>  
                <button type={action} onClick={handleCLick}>{text}</button>
        </div>
    );
}

export default CustomButton;