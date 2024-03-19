import './ListMenu.css'
import {useContext} from "react";
import {ThemeContext} from "../../App/App";
import FriendsList from "./FriendsList";

function ListMenu(user) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className="list-group w-25 position-fixed" id="options"
             role="tablist" data-bs-theme={theme}>
            <a className="list-group-item list-group-item-action active"
               data-bs-toggle="list"
               role="tab">
                Home
            </a>
            <a className="list-group-item list-group-item-action"
               type="button"
               data-bs-toggle="list"
               data-bs-target="#offcanvasRight"
               aria-controls="offcanvasRight"
               role="tab">
                Friends
                <FriendsList user={user.user}/>
            </a>
            <a className="list-group-item list-group-item-action"
               data-bs-toggle="list"
               role="tab">
                groups
            </a>
        </div>
    )
}

export default ListMenu