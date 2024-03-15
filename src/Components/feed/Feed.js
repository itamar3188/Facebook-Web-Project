import Navbar from "../navbar/Navbar";
import PostForm from "../postForm/PostForm";
import './feed.css'
import List from '../menu/ListMenu'
import {useContext} from "react";
import Posts from "../postList/Posts";
import {ThemeContext} from "../../App/App";

function Feed() {
    const {theme} = useContext(ThemeContext)

    return (
        <body className={theme}>
        <Navbar/>
        <List/>
        <div className="vstack gap-2" id="feed">
            <PostForm/>
            <Posts/>
        </div>
        </body>
    )
        ;
}

export default Feed;