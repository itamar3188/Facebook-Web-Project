import Navbar from "../navbar/Navbar";
import PostForm from "../postForm/PostForm";
import './feed.css'
import {useState} from "react";
import Posts from "../postList/Posts";
import Allpost from '../../data/posts.json'

function Feed({username}) {
    const [posts, setPosts] = useState(Allpost)
    const addPost = (newPost) => {
        setPosts([newPost, ...posts,]);
    };
    const updatePost = (postId, updatedPost) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === postId ? updatedPost : post))
        );
    };
    const handleDeletePost = (postID) => {
        setPosts(posts.filter((post) => post.id !== postID))
    }
    return (
        <feed>
            <Navbar/>
            <div className="vstack gap-1" id="feed">
                <PostForm addPost={addPost} username={"user1"}/>
                <Posts posts={posts} updatePost={updatePost}
                       deletePost={handleDeletePost} username={username}/>
            </div>
        </feed>
    );
}

export default Feed;