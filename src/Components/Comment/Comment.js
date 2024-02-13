import './Comment.css'
import {ThemeContext} from "../../App/App";
import {useContext} from "react";
function Comment({name, body}) {
    const {theme} = useContext(ThemeContext)
    return (
        <comment>
            <div id="comment">
                <h6 id="userName">{name}:</h6>
                <text >{body}</text>
            </div>
        </comment>
    );
};
export default Comment;