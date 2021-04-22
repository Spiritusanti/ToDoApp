import React from 'react';
import LogIn from '../../components/SignIn_SignUp/LogIn/LogIn.component';
import SignUp from '../../components/SignIn_SignUp/SignUp/SignUp.component';
import './SignIn.styles.scss';

const SignIn = () => {
    return (
        <div className="signin-page">
            <LogIn />
            <SignUp />
        </div>
    )
}

export default SignIn;