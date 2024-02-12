import React, {useState} from "react";
import {useContext} from "react";
import {ThemeContext} from "../App/App";
import './PostForm.css'

function PostForm({username, onSubmit}) {
    const {theme} = useContext(ThemeContext);
    const [textInput, setText] = useState('')
    const [imageURL, setFileURL] = useState('')

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleImg = (e) => {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file)
        setFileURL(url)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const post = {
            "name": username,
            "text": textInput,
            "pic": imageURL
        }
        onSubmit(post)
        setText('')
        setFileURL(null)
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit} className="mb-3" data-bs-theme={theme} id="postMaker">
                <textarea
                    className="form-control"
                    id="postMaker"
                    rows="auto"
                    onChange={handleText}
                    value={textInput}
                    placeholder="tell people what you think"
                    required
                ></textarea>
                <input
                    onChange={handleImg}
                    className="form-control"
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    value={null}
                />
                <button className="btn btn-primary float-end" type="submit">
                    publish
                </button>
            </form>
        </div>
    );
}

export default PostForm;