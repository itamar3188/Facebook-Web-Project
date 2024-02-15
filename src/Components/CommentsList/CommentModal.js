import CreateComment from "../Comment/CreateComment";
import Comment from "../Comment/Comment";

function Comments({comments, addComment, postId}) {
    return (
        <div className="modal fade" id="staticBackdrop"
             data-bs-backdrop="static" data-bs-keyboard="false"
             tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5"
                            id="staticBackdropLabel">Comments</h1>
                        <button type="button" className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="card-body">
                            {
                                comments.map((comment) => (
                                    <Comment username={comment.username}
                                             text={comment.text}/>
                                ))
                            }
                        </div>
                        <div className="card-footer">
                            <CreateComment addComment={addComment} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;