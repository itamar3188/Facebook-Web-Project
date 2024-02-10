import Comment from "./Comment/Comment";
import {ReactComponent as CommentsIcon} from "../../Assest/comment.svg";
import {useState} from "react";
import Comments from "../../../data/comments.json";

function CommentsModal() {
    const [commentList, setComment] = useState(Comments);
    const addComment = ({text}) => {
        const comment = {
            "name": "user1",
            "body": text
        }
        setComment([comment, ...commentList]);
    }
    return (
        <comments>
            <button type="button" className="btn" id="comments"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
                <CommentsIcon/>
                comments
            </button>
            <div className="modal fade" id="staticBackdrop"
                 data-bs-backdrop="static" data-bs-keyboard="false"
                 tabIndex="-1"
                 aria-labelledby="staticBackdropLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5"
                                id="staticBackdropLabel">Comments</h1>
                            <button type="button" className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {
                                commentList.map((comments) =>
                                    <Comment {...comments} />
                                )
                            }
                        </div>
                        <div className="modal-footer">
                            <form className="form-control">
                                <input
                                    className="form-control form-control-sm"
                                    type="text"
                                    placeholder="add comment"
                                    aria-label="form-control-sm"
                                    id="text"/>
                                <button onSubmit={addComment}
                                        type="submit"
                                        className="btn btn-primary mb-1">
                                    add
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </comments>
    );
}

export default CommentsModal;