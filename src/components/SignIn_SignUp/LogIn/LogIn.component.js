import React from 'react';
import CustomButton from '../../CustomButton/CustomButton.component';
import './LogIn.styles.scss';

const LogIn = () => {
    return (
        <div className="log-in">
            <h2>Log In!</h2>
            <form>
                <input placeholder="email" />
                <input placeholder="password" type="password"/>
            </form>
            <CustomButton text="login" />
        </div>
    )
}

export default LogIn;