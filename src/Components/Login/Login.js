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

    async function login(e){
        console.log("login")
        e.preventDefault()
        const user = await fetch('http://localhost:8989/api/token', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        console.log(user)
        const u = await user.json()
        if(u) {
            navigate('/Feed', {state: u.user})
        } else {
            alert('Incorrect username or password!');
        }
    }

    return (
        <div className="mask">
            <div className="container text-center">
                <div className="row align-items-center" id="loginPage">
                    <div className='col'>
                        <img src={Fakebook} alt="logo"/>
                    </div>
                    <div className="col">
                        <div className="card" id="wrapper">
                            <h1>Log-in</h1>
                            <form onSubmit={login} className="form-control-lg"
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
                </div>
            </div>
        </div>
    );
}
export default Login;
