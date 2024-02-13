import Post from "../Post/Post";


function Posts({posts, updatePost, deletePost , username}) {
    return (
        <div className="posts">
            {
                posts.map((post) => (
                    <Post id={post.id} post={post} updatePost={updatePost}
                          deletePost={deletePost} username={username}/>
                ))
            }
        </div>
    );
}
export default Posts;