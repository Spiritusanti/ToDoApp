import React, { useReducer, useState } from 'react';
import LogIn from '../../components/SignIn_SignUp/LogIn/LogIn.component';
import SignUp from '../../components/SignIn_SignUp/SignUp/SignUp.component';
import './SignIn.styles.scss';

export const signinACTIONS = {
    SIGN_IN: 'sign_in',
    SIGN_OUT: 'sign_out',
    REGISTER: 'register'
}

const signinReducer = (formData, action) => {
    switch(action.type) {
        case signinACTIONS.SIGN_IN:
            return console.log('signin: ', action.payload.email, action.payload.password)
        case signinACTIONS.SIGN_OUT:
            return console.log(formData)
        case signinACTIONS.REGISTER:
            return console.log('register:', formData)
        default:
            return;
    }
}


const SignIn = () => {
    const [formData, dispatch] = useReducer(signinReducer, []);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    console.log("parent formData: ", {username, password, email, formData});

    const handleLogIn = (e) => {
        e.preventDefault();
        dispatch({type: signinACTIONS.SIGN_IN, payload:{email: email, password: password}})
        setPassword('');
        setEmail('');
    }

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch({type: signinACTIONS.REGISTER, payload:{username, email, password}})
        setPassword('');
        setUsername('');
    }

    return (
        <div className="signin-page">
            <LogIn 
            handleSubmit={handleLogIn} 
            email={email} 
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            />
            <SignUp handleRegister={handleRegister}/>
        </div>
    )
}

export default SignIn;