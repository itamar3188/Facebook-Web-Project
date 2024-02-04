import React, {useState} from "react";
// import { Link } from "react-router-dom"; // Assuming you are using react-router-dom for navigation
import './Style.css';
import user_icon from './Assest/person.png';
import password_icon from './Assest/password.png';
import {Link} from "react-router-dom";

function Login()
{
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
                <button type="submit">Login</button>
            </form>
            <Link to='/Register'>Register</Link>
        </div>
    );
};

export default Login;
