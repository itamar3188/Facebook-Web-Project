import Navbar from "../navbar/Navbar";
import Post from "../Post/Post";
import posts from '../../data/posts.json'
import {useContext, useState} from "react";
import PostForm from "../PostForm";
import './feed.css'
import {ThemeContext} from "../../App/App";

function Feed({username}) {
    const [postList, setPost] = useState(posts);
    const {theme} = useContext(ThemeContext)

    const handleSubmit = (text, file) => {
        const newPost = {
            id: Date.now(),
            name: "user1",
            text,
            image: file,
        };
        setPost([newPost, ...posts]);
    };
    return (
        <feed>
            <Navbar/>
            <div id="feed">
                <PostForm onSubmit={handleSubmit}/>
                {
                    postList.map((post, index) =>
                        <Post key={index} post={post} />
                    )
                }
            </div>
        </feed>
    );
}

export default Feed;