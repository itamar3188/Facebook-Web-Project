import "../../App/App.css"
import Navbar from "./feed";
import Post from "./Post/Post";
import posts from '../../data/posts.json'
import {useState} from "react";

function FeedScreen() {
    const [postList, setPost] = useState(posts);
    return (
        <span>
            <Navbar/>
            {
                postList.map((post) =>
                    <Post {...post} />
                        )
            }
        </span>
    );
}

export default FeedScreen;