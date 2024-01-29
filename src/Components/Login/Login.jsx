import React from "react";
import './Login.css'
import user_icon from '../Assest/person.png'
import password_icon from '../Assest/password.png'


const Login = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
            <div className="submit">Sign Up </div>
            <div className="submit"> Login </div>
        </div>
    )
}

export default Login