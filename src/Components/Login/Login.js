import React, {useState} from 'react';
import '../signup/Style.css';
import './Login.css'
import user_icon from '../Assest/person-circle.svg';
import password_icon from '../Assest/password.png';
import {Link, useNavigate} from "react-router-dom";
import Fakebook from '../Assest/fakebook.png'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const check = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        if (username === 'User1' && password === 'User1') {
            navigate('/Feed', {state:{username : username}}); // Navigate to the feed screen if username and password are correct

        } else {
            alert('Incorrect username or password!'); // Alert the user if credentials are incorrect
        }
    }

    return (
        <div className="mask">
            <img src={Fakebook} alt="logo"/>
            <div className="wrapper">
                <h1>Log-in</h1>
                <form onSubmit={check} className="form-control-lg"
                      id="login">
                    <input type="text" id="username" name="username"
                           placeholder='Username' required
                           value={username}
                           onChange={(e) => setUsername(e.target.value)}/>
                    <label className="form-check-label"
                           htmlFor="username">
                        <img src={user_icon} alt="User Icon"/>
                    </label>
                    <input type="password" id="password"
                           name="password"
                           placeholder='Password' required
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form-check-label"
                           htmlFor="password">
                        <img src={password_icon}
                             alt="Password Icon"/>
                    </label>
                    <button type="submit"
                            className="btn btn-primary">Login
                    </button>
                    <Link to='/Register'
                          className="btn btn-success w-100"
                          id="Register">Register</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
