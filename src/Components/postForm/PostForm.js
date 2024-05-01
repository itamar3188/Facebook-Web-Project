import React, {useRef, useState} from "react";
import {useContext} from "react";
import {ThemeContext} from "../../App/App";
import './PostForm.css'
import '../../config'
import ProfilePic from "../Assest/person-circle.svg";
import config from "../../config";

// Popup component
function Popup({ message, onClose }) {
    return (
        <div className="popup">
            <div className="popup-content">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

function PostForm(user) {
    const [text, setText] = useState("");
    const [img, setImageURL] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const {theme} = useContext(ThemeContext);
    const formRef = useRef();

    async function create(e) {
        e.preventDefault()
        console.log('create');
        const requestData = {
            display: user.user.displayName,
            profile: user.user.profileImage,
            img: img,
            text: text,
        };

        const newPost = await fetch('http://localhost:'+config.PORT+'/api/users/' + user._id + '/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData),
        }).then(response => response.json());

        formRef.current = null
        if(newPost === null) {
            // Set error message if newPost is null
            setErrorMessage("Post couldn't be sent - bad link.");
        }
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImageURL(reader.result)
            }
            reader.readAsDataURL(file)
        }
    };

    return (
        <div>


            <form className="mb-3" data-bs-theme={theme} id="postMaker" onSubmit={create}>
                <textarea
                    className="form-control"
                    rows="auto"
                    onChange={handleText}
                    value={text}
                    placeholder="tell people what you think"
                    required
                />
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
                    <button className="btn btn-primary float-end w-auto" type="submit">
                        publish
                    </button>
                </div>
            </form>
            {/* Popup for error message */}
            {errorMessage && (
                <Popup message={errorMessage} onClose={() => setErrorMessage("")} />
            )}
        </div>
    );
}

export default PostForm;
