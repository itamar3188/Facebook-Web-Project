import Navbar from "../navbar/Navbar";
import PostForm from "../postForm/PostForm";
import './feed.css'
import List from '../menu/ListMenu'
import {useContext, useEffect, useState} from "react";
import Posts from "../postList/Posts";
import Allpost from '../../data/posts.json'
import {ThemeContext} from "../../App/App";
import {useLocation, useNavigate} from "react-router-dom";

function Feed() {
    const [posts, setPosts] = useState(Allpost)
    const {theme} = useContext(ThemeContext)
    const navigate = useNavigate();
    const {state} = useLocation()
    useEffect(() => {
        if (!state) {
            navigate(-1);
        }

    }, [state, navigate]);
    const username = state ? state.username : null
    const addPost = (newPost) => {
        console.log(posts.length)
        setPosts((posts) => [{
                id: posts.length + 1,
                username: username,
                profilePic: '',
                text: newPost.text,
                img: newPost.img,
                time: new Date().toISOString(),
                comments: [],
            }, ...posts]
        );
    };

    const updatePost = (postId, updatedPost) => {
        setPosts((prevPosts) => {
            const newPosts = [...prevPosts];
            const postIndex = newPosts.findIndex((post) => post.id === postId);
            newPosts[postIndex] = updatedPost;
            return newPosts;
        });
    };
    const handleDeletePost = (postID) => {
        setPosts(posts.filter((post) => post.id !== postID))
    }

    return (
        <body className={theme}>
        <Navbar/>
        <List/>
        <div className="vstack gap-1" id="feed">
            <PostForm addPost={addPost} username={"user1"}/>
            <Posts posts={posts} updatePost={updatePost}
                   deletePost={handleDeletePost}
                   username={username}/>
        </div>
        </body>
    )
        ;
}

export default Feed;