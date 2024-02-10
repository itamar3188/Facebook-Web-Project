import React, { useState } from 'react';
import '../signup/Style.css';
import user_icon from '../Assest/person.png';
import password_icon from '../Assest/password.png';
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const check = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        if (username === 'User1' && password === 'User1') {
            navigate('/Feed'); // Navigate to the feed screen if username and password are correct
        } else {
            alert('Incorrect username or password!'); // Alert the user if credentials are incorrect
        }
    }

    return (
        <div className='wrapper'>
            <h1>Login</h1>
            <form onSubmit={check}>
                <div className="input-box">
                    <input type="text" id="username" name="username" placeholder='Username' required
                           value={username} onChange={(e) => setUsername(e.target.value)} />
                    <img src={user_icon} alt="User Icon" />
                </div>
                <div className="input-box">
                    <input type="password" id="password" name="password" placeholder='Password' required
                           value={password} onChange={(e) => setPassword(e.target.value)} />
                    <img src={password_icon} alt="Password Icon" />
                </div>
                <button type="submit" className="button">Login</button>
                <Link to='/Register' className="button" id="Register">Register</Link>
            </form>
        </div>
    );
};

export default Login;
