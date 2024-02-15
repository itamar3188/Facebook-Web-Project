import {useContext, useState} from "react";
import {ThemeContext} from "../App/App";

function CreateComment({addComment}) {
    const {theme} = useContext(ThemeContext)
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            username: "user",
            text
        }
        addComment(newComment)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit} className="form-control hstack gap-0"
              data-bs-theme={theme}>
            <input className="form-control form-control-sm"
                   type="text"
                   placeholder="add comment"
                   value={text}
                   onChange={(e) => setText(e.target.value)}
                   aria-label="form-control-sm" required/>
            <button className="btn btn-success" type="submit">
                add
            </button>
        </form>
    );
}

export default CreateComment;