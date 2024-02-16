import Logo from "../Assest/fakebookLogo.svg";
import {ReactComponent as Image} from "../Assest/person-circle.svg";
import {ReactComponent as Search} from "../Assest/search.svg";
import './Navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
import {ThemeContext} from "../../App/App";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";


function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        navigate('/');
    }
    return (

        <nav
            className="navbar navbar-expand-lg navbar-light bg-primary-subtle sticky-top"
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
                            <Image id={theme}/>
                        </button>
                        <ul className="dropdown-menu"
                            aria-labelledby="navbarDropdown">
                            <li>
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