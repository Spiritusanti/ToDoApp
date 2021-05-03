import React from 'react';
import CustomButton from '../../CustomButton/CustomButton.component';
import './SignUp.styles.scss';


const SignUp = (handleSubmit) => {
    return (
        <div className="signup">
            <h2>Sign Up!</h2>
            <form>
                <input placeholder="username" />
                <input placeholder="email" />
                <input placeholder="create password" type="password"  />
                <input placeholder="confirm password" type="password" />
            </form> 
            <CustomButton text="sign up" />       
        </div>
    )
}

export default SignUp;