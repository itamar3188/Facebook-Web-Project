import Navbar from "../navbar/Navbar";
import PostForm from "../postForm/PostForm";
import './feed.css'
import List from '../menu/ListMenu'
import {useContext} from "react";
import Posts from "../postList/Posts";
import {ThemeContext} from "../../App/App";
import {useLocation} from "react-router-dom";

function Feed() {
    const {theme} = useContext(ThemeContext)
    const user = useLocation()

    return (
        <body className={theme}>
        <Navbar user={user.state}/>
        <List user={user.state}/>
        <div className="vstack gap-2" id="feed">
            <PostForm user={user.state}/>
            <Posts user={user.state}/>
        </div>
        </body>
    )
        ;
}

export default Feed;