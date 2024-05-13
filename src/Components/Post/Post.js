import {useState} from "react";
import './Post.css'
import {useContext} from "react";
import {ReactComponent as Like} from "../Assest/like.svg";
import {ReactComponent as CommentsIcon} from "../Assest/comment.svg";
import Comments from "../CommentsList/CommentModal";
import {ThemeContext} from "../../App/App";
import EditPost from "../postForm/EditPost";
import {ReactComponent as Options} from "../Assest/three-dots.svg";
import {ReactComponent as Share} from "../Assest/share.svg";


function Post({post, updatePost, user, deletePost}) {
    const {theme} = useContext(ThemeContext);
    const [liked, setLiked] = useState("#000000");
    const [share, pushedShare] = useState("#000000")
    const [editing, setEditing] = useState(false);
    const [isHidden, setHiddenObject] = useState(true);
    const [comments, setComments] = useState(post.comments);


    const addComment = (comment) => {
        const newComment = {
            username: user.username,
            id: comment.id,
            text: comment.text
        }
        setComments([...comments, newComment]);
    };

    const handleShareButton = () => {
        const newIconColor = share === '#000000' ? '#61afdb' : '#000000';
        pushedShare(newIconColor)
    }
    const handleEditCancel = () => {
        setEditing(false);
        setHiddenObject(true)
    };
    const handleUpdate = (updatedPost) => {
        setEditing(false);
        setHiddenObject(true)
        updatePost(post._id, updatedPost);
    };

    async function Delete() {
        console.log("delete")
        await fetch('http://localhost:8989/api/users/' + user._id + '/posts/' + post._id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'authorization': 'bearer ' + user.token
            },
        }).then(data => data.json());
        deletePost(post._id);
    }

    async function handleLike() {
        console.log('like')
        await fetch('http://localhost:8989/api/posts/' + post._id + '/likes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'authorization': 'bearer ' + user.token
            },
            body: JSON.stringify({
                id: user._id
            })
        });
        const color = liked === '#000000' ? '#61afdb' : '#000000'
        setLiked(color)
    }

    const handleEdit = () => {
        setEditing(true)
        setHiddenObject(false)
    }
    const handleCommentEdit = (commentID, updatedComment) => {
        setComments((prevComments) =>
            prevComments.map((comment) => (comment.id === commentID) ? {
                ...comment,
                text: updatedComment
            } : {comment}))
    }
    const handleDeleteComment = (commentID) => {
        setComments(comments.filter((comment) => comment.id !== commentID))
    }

    return (
        <div id="post">
            <div className="card border-black" id="post"
                 data-bs-theme={theme}>
                <div className="card-body" id="post-content">
                    <div id="user_id"
                         className="d-flex mb-3">
                        <img src={post.profilePic}
                             className="rounded-circle p-1" id="profile"
                             alt=""/>
                        <h6 className="p-1 fw-bold"
                            id="user">{post.username}</h6>
                        { post.username === user.displayName && isHidden &&
                            <div className="btn-group dropend ms-auto p-1">
                                <button type="button"
                                        className="dropdown-toggle btn"
                                        data-bs-toggle="dropdown">
                                    <Options/>
                                </button>
                                <ul className="dropdown-menu">
                                    <li onClick={handleEdit}
                                        type="button"
                                        className="dropdown-item">
                                        edit
                                    </li>
                                    <li onClick={Delete}
                                        type="button"
                                        className="dropdown-item">
                                        delete
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                    {editing ? (
                        <EditPost post={post}
                                  user={user}
                                  updatePost={handleUpdate}
                                  cancel={handleEditCancel}/>
                    ) : (
                        <div>
                            <figure className="figure">
                                <img src={post.img}
                                     className="figure-img img-fluid rounded"
                                     alt=""
                                     id="img"/>
                            </figure>
                            <p>{post.text}</p>
                        </div>
                    )
                    }
                </div>
                <div className="card-footer bg-transparent border-black"
                     id="buttons">
                    <button onClick={handleShareButton} type="button" className="btn" id="share">
                        <Share className="m-auto" style={{fill: share}}/>
                        share
                    </button>
                    <button type="button" className="btn" id="comments"
                            data-bs-toggle="modal"
                            data-bs-target={`#staticBackdrop-${post.id}`}>
                        <CommentsIcon/>
                        comments
                    </button>
                    <Comments comments={comments}
                              addComment={addComment}
                              postId={post.id}
                              deleteComment={handleDeleteComment}
                              updateComment={handleCommentEdit}
                              username={user.username}/>
                    <button onClick={handleLike} type="button"
                            className="btn" id="like">
                        <Like style={{fill: liked}}/>
                        like
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Post;