import React from 'react';
import './CustomButton.styles.scss';


const CustomButton = ({ text, action }) => {
    return (
        <div className='custom-button-container'>  
                <button type={action}>{text}</button>
        </div>
    );
}

export default CustomButton;