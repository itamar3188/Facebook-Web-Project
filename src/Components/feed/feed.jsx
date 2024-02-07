import {ReactComponent as Facebook} from "./facebook.svg";
import {ReactComponent as Image} from "./person-circle.svg";
import {ReactComponent as Search} from "./search.svg";
import './feed.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary-subtle" id="navbar">
            <div className="container-fluid">
                <Facebook/>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                        <button
                            className="nav-link dropdown-toggle btn"
                            type="button"
                            id="setting"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <Image/>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <li className="dropdown-item-text">
                                    <div className="form-check form-switch">
                                        <input className="form-check-input"
                                               type="checkbox"
                                               id="switch"/>
                                        <label id="switchLabel" className="form-check-label">
                                            light/dark
                                        </label>
                                    </div>
                                </li>
                            </li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li>
                                <button className="dropdown-item" id="log-out" type="button">
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
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;