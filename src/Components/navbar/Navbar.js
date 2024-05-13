import Logo from "../Assest/fakebookLogo.svg";
import {ReactComponent as Search} from "../Assest/search.svg";
import {ReactComponent as Alerts} from "../Assest/envelope-paper.svg";
import './Navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import {ThemeContext} from "../../App/App";
import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


function Navbar(user) {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const [requests, setRequests] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchRequestsData() {
            const fetchedFriendsData = await Promise.all(
                user.user.friends_request.map(async (friendId) => {
                    const res = await fetch('http://localhost:8989/api/users/' + friendId)
                    return await res.json()
                })
            );
            setRequests(fetchedFriendsData);
        }

        fetchRequestsData();
    }, [user.user.friends_request]);

    const logout = (e) => {
        e.preventDefault()
        navigate('/');
    }

    async function accept(friendId) {
        console.log('patch')
        const res = await fetch('http://localhost:8989/api/users/' + user.user._id + '/friends/' + friendId, {
            method: 'PATCH',
            headers: {
                "Content-Type": 'application/json',
                "authorization": 'bearer ' + user.user.token
            }
        })
        if (res.ok) {
            const find = requests.filter(request => request._id !== friendId);
            user.user.friends_request = user.user.friends_request.filter(request => request !== String(friendId))
            user.user.friends.push(String(friendId))
            setRequests(find)
        }
    }

    async function reject(friendId) {
        console.log('delete')
        const res = await fetch('http://localhost:8989/api/users/' + user.user._id + '/friends/' + friendId, {
            method: 'delete',
            headers: {
                "Content-Type": 'application/json',
                "authorization": 'bearer ' + user.user.token
            }
        })
        if (res.ok) {
            const find = requests.filter(request => request._id !== friendId);
            user.user.friends_request = user.user.friends_request.filter(request => request !== String(friendId))
            setRequests(find)
        }
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary-subtle fixed-top"
             data-bs-theme={theme}>
            <div className="container-fluid">
                <img src={Logo} alt="Logo" width="150" height="40" className="d-inline-block align-text-top"/>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <button
                            className="nav-link dropdown-toggle btn"
                            type="button"
                            id="setting"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <img src={user.user.profileImage} alt="" width={35} height={35} id="profilePic"/>
                        </button>
                        <ul className="dropdown-menu"
                            aria-labelledby="navbarDropdown">
                            <li className="dropdown-item-text">
                                <div className="form-check form-switch">
                                    <input className="form-check-input"
                                           type="checkbox"
                                           role="switch"
                                           id="switch"
                                           onChange={toggleTheme}
                                           checked={theme === 'dark'}
                                    />
                                    <label id="switchLabel"
                                           className="form-check-label">
                                        {theme} mode
                                    </label>
                                </div>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <button onClick={logout} className="dropdown-item" id="log-out"
                                        type="button">
                                    <p className="text-white">log-out</p>
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <button
                            className="nav-link dropdown-toggle btn position-relative"
                            type="button"
                            id="alerts"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {requests.length !== 0 &&
                                <span
                                    className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span className="visually-hidden">New alerts</span>
                            </span>
                            }
                            <Alerts/>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {requests.length === 0 &&
                                <p>there are no requests right now</p>
                            }
                            {requests.map((request) => (
                                <li className="dropdown-item-text" key={`request-${request._id}`}>
                                    <p className="fs-6"> you hav a friend request from {request.displayName}.
                                        Accept? </p>
                                    <div className="d-flex justify-content-start">
                                        <button type="button" className="btn btn-success"
                                                onClick={() => (accept(request._id))}>Accept
                                        </button>
                                        <button type="button" className="btn btn-danger"
                                                onClick={() => (reject(request._id))}>Reject
                                        </button>
                                    </div>
                                </li>
                            ))
                            }
                        </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit">
                            <Search/>
                        </button>
                    </div>
                    <input className="form-control me-2" type="search"
                           placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;