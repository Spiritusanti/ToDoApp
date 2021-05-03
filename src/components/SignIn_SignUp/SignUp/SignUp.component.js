import React, {useState} from 'react';
import CustomButton from '../../CustomButton/CustomButton.component';
import './SignUp.styles.scss';


const SignUp = ({ handleSubmit, ...otherProps }) => {
    const [confirmPassword, setConfirmPassword] = useState('');
    console.log('p2', confirmPassword)
    return (
        <div className="signup">
            <h2>Sign Up!</h2>
            <form handleSubmit={() => confirmPassword === otherProps.password ? handleSubmit : console.log('passwords do not match')}>
                <input placeholder="username" value={otherProps.username} onChange={e => otherProps.setUsername(e.target.value)}/>
                <input placeholder="email" value={otherProps.email} onChange={e => otherProps.setEmail(e.target.value)}/>
                <input placeholder="create password" type="password"  value={otherProps.password} onChange={e => otherProps.setPassword(e.target.value)}/>
                <input placeholder="confirm password" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </form> 
            <CustomButton text="sign up" onClick={() => confirmPassword === otherProps.password ? handleSubmit : console.log('passwords do not match')}/>       
        </div>
    )
}

export default SignUp;