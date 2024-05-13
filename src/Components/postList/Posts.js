import Post from "../Post/Post";
import {useEffect, useState} from "react";
import PostForm from "../postForm/PostForm";

function Posts(user) {
    const [postList, setPostList] = useState([]);
    const addPost = (newPost) => {
        setPostList((posts) => [{
                _id: newPost._id,
                username: user.user.displayName,
                profilePic: newPost.profilePic,
                text: newPost.text,
                img: newPost.img,
                time: newPost.date,
                comments: [],
            }, ...posts]
        );
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:8989/api/posts");
            const post = await result.json();
            console.log("post")
            setPostList(post);
        };

        fetchData();
    }, []);

    const updatePost = (postId, updatedPost) => {
    };

    const handleDeletePost = (postID) => {
        setPostList(postList.filter((post) => post._id !== postID))
    }

    return (
        <div>
            <PostForm user={user.user} addpost={addPost}/>
            {postList.map((post) => (
                <Post key={post._id}
                      post={post}
                      user={user.user}
                      updatePost={updatePost}
                      deletePost={handleDeletePost}/>
            ))}
        </div>
    );
}

export default Posts;