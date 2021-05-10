import React from 'react';
import CustomButton from '../../CustomButton/CustomButton.component';
import './SignUp.styles.scss';


const SignUp = ({ handlesubmit, username, setUsername, email, setEmail, password, setPassword, showSignUp, setShowSignUp }) => {
    return (
        <div className="signup">
            <div className="close" onClick={() => setShowSignUp(!showSignUp)}></div>
            <h2>Sign Up!</h2>
            <form onSubmit={() => handlesubmit}>
                <input placeholder="username" value={username} onChange={e => setUsername(e.target.value)}/>
                <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input placeholder="create password" type="password"  value={password} onChange={e => setPassword(e.target.value)}/>
                <input placeholder="confirm password" type="password" />
            </form> 
            <CustomButton text="sign up" onClick={() => handlesubmit}/>       
        </div>
    )
}

export default SignUp;