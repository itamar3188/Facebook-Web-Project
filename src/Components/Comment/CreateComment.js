import {useContext, useState} from "react";
import {ThemeContext} from "../../App/App";

function CreateComment({addComment, username}) {
    const {theme} = useContext(ThemeContext)
    const [text, setText] = useState('')
    const [counter, addOne] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newComment = {
            username: username,
            text,
            id: counter
        }
        addOne(counter + 1)
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
            <button className="btn btn-success w-auto" type="submit">
                add
            </button>
        </form>
    );
}

export default CreateComment;