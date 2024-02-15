import Navbar from "../navbar/Navbar";
import PostForm from "../postForm/PostForm";
import './feed.css'
import List from '../menu/ListMenu'
import {useState} from "react";
import Posts from "../postList/Posts";
import Allpost from '../../data/posts.json'

function Feed({username, profilePic}) {
    const [posts, setPosts] = useState(Allpost)
    const addPost = (newPost) => {
        console.log(posts.length)
        setPosts((posts) => [{
                id: posts.length + 1,
                username: username,
                profilePic: profilePic,
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
        <feed>
            <Navbar/>
            <List/>
            <div className="vstack gap-1" id="feed">
                <PostForm addPost={addPost} username={"user1"}
                          profilePic={profilePic}/>
                <Posts posts={posts} updatePost={updatePost}
                       deletePost={handleDeletePost}
                       username={username}/>
            </div>
        </feed>
    );
}

export default Feed;