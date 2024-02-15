import './ListMenu.css'
import {useContext, useState} from "react";
import {ThemeContext} from "../../App/App";
function ListMenu() {
    const [isActive, setIsActive] = useState(true)
    const{theme} = useContext(ThemeContext)
    return (
        <div className="list-group w-25 position-fixed" id="options"
             role="tablist" data-bs-theme={theme}>
            <a className="list-group-item list-group-item-action active"
               data-bs-toggle="list"
               role="tab">
                Home
            </a>
            <a className="list-group-item list-group-item-action"
               data-bs-toggle="list"
               role="tab">
                Friends
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