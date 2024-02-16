import React, {useContext, useState} from 'react';
import './Comment.css';
import {ReactComponent as Options} from "../Assest/three-dots.svg";
import {ThemeContext} from "../../App/App";

function Comment({comment, updateComment, deleteComment}) {
    const [editing, setEditing] = useState(false)
    const [editedText, setEditedText] = useState(comment.text)
    const {theme} = useContext(ThemeContext)

    const handleEdit = () => {
        setEditing(true)
    }
    const handleSave = () => {
        updateComment(comment.id, editedText)
        setEditing(false)
    }
    const handleCancel = () => {
        setEditing(false)
    }
    const handleDelete = () => {
        deleteComment(comment.id)
    }
    return (
        <div className="card-body rounded-4" id="comment">
            <div className="d-flex justify-content-between">
                <h6 className="username" id="userName">{comment.username}:</h6>
                <div className="btn-group btn-group-sm dropend ms-auto p-1">
                    <button type="button"
                            className="dropdown-toggle btn"
                            data-bs-toggle="dropdown">
                        <Options/>
                    </button>
                    <ul className="dropdown-menu">
                        <li type="button"
                            onClick={handleEdit}
                            className="dropdown-item">
                            edit
                        </li>
                        <li type="button"
                            onClick={handleDelete}
                            className="dropdown-item">
                            delete
                        </li>
                    </ul>
                </div>
            </div>
            {editing ? (
                <form className="form-control hstack gap-0"
                      data-bs-theme={theme} onSubmit={handleSave}>
                    <input className="form-control form-control-sm"
                           type="text"
                           placeholder="add comment"
                           value={editedText}
                           onChange={(e) => setEditedText(e.target.value)}
                           aria-label="form-control-sm" required/>
                    <button type="submit" className="btn btn-primary w-auto">Save
                    </button>
                    <button type="button"
                            className="btn btn-secondary btn-outline-danger w-auto"
                            onClick={handleCancel}>Cancel
                    </button>
                </form>
            ) : (
                <p className="text">{comment.text}</p>
            )
            }
        </div>
    );
}

export default Comment;