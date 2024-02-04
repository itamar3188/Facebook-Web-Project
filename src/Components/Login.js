import React from "react";
// import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for navigation
import './Login.css';
import user_icon from './Assest/person.png';
import password_icon from './Assest/password.png';

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <h1>Login</h1>
            <form>
                <div className="input-box">
                    <input type="text" id="username" name="username" placeholder='Username' required/>
                    <img src={user_icon} alt="User Icon"/>
                </div>
                <div className="input-box">
                    <input type="password" id="password" name="password" placeholder='Password' required/>
                    <img src={password_icon} alt="Password Icon"/>
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" id="rememberMe" name="rememberMe"/>
                        Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    <p>Don't have an account?</p> <a href="Signin.js">Register</a>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
