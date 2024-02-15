import Post from "../Post/Post";


function Posts({posts, updatePost, deletePost , username}) {

    return (
        <div className="posts">
            {
                posts.map((post) => (
                    <Post post={post} updatePost={updatePost}
                          deletePost={deletePost} key={post.id}/>
                ))
            }
        </div>
    );
}
export default Posts;