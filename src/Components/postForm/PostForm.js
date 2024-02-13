import React, {useRef, useState} from "react";
import {useContext} from "react";
import {ThemeContext} from "../../App/App";
import './PostForm.css'

function PostForm({addPost, username, profilePic}) {
    const [text, setText] = useState("");
    const [img, setImageURL] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const {theme} = useContext(ThemeContext);
    const formRef = useRef();
    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageURL(e.target.result);
            };
            reader.readAsDataURL(file);
            setImageFile(file);
        } else {
            setImageURL("");
            setImageFile(null);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {username, text, img, profilePic};
        setText("");
        setImageURL("");
        addPost(newPost);
        formRef.current.value = null;
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit}
                  className="mb-3" data-bs-theme={theme}
                  id="postMaker">
                <textarea
                    className="form-control"
                    rows="auto"
                    onChange={handleText}
                    value={text}
                    placeholder="tell people what you think"
                    required
                >
                </textarea>
                <div className="hstack gap-0">
                    <input
                        onChange={handleImageChange}
                        ref={formRef}
                        className="form-control"
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        required
                    />
                    <button className="btn btn-primary float-end" type="submit">
                        publish
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;