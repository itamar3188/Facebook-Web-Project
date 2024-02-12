import Comment from "../Comment/Comment";
import {useState} from "react";
import com from "../../data/comments.json";

function Comments({username}) {
    const [commentList, setComment] = useState(com);
    const [input, setInput] = useState('')

    const addComment = (event) => {
        const comment = {
            "name": username,
            "body": input
        }
        setComment([comment, ...commentList])
        setInput('')
    }
    return (
        <div className="modal fade" id="staticBackdrop"
             data-bs-backdrop="static" data-bs-keyboard="false"
             tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog" >
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
                        <form onSubmit={addComment} className="form-control">
                            <input className="form-control form-control-sm"
                                   type="text"
                                   placeholder="add comment"
                                   value= {input}
                                   onChange={(e) => setInput(e.target.value)}
                                   aria-label="form-control-sm" required/>
                            <button className="btn btn-success" type="submit">add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Comments;