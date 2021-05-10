import React from 'react';
import CustomButton from '../../CustomButton/CustomButton.component';
import './LogIn.styles.scss';

const LogIn = ({ handleLogIn, email, setEmail, password, setPassword, setShowLogIn, showLogIn }) => {
    return (
        <div className="log-in">
            <span className="close" onClick={() => {setShowLogIn(!showLogIn)}}></span>
            <h2>Log In!</h2>
            <form onSubmit={handleLogIn}>
                <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </form>
            <CustomButton text="login" handleClick={() => handleLogIn}/>
        </div>
    )
}

export default LogIn;