import "./App.css"
import Navbar from "../Components/feed/feed";
import Post from "../Components/feed/Post/Post";
import posts from '../data/posts.json'
import {useState} from "react";

function App() {
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

export default App;