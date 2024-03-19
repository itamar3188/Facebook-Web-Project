import React, {useRef, useState} from "react";
import {useContext} from "react";
import {ThemeContext} from "../../App/App";
import './PostForm.css'
import ProfilePic from "../Assest/person-circle.svg";

function PostForm(user) {
    const [text, setText] = useState("");
    const [img, setImageURL] = useState("");
    const {theme} = useContext(ThemeContext);
    const formRef = useRef();

    async function create(e) {
        e.preventDefault()
        console.log('create');
        console.log(img)
        const requestData = {
            display: user.user.displayName,
            profile: user.user.profileImage,
            img: img,
            text: text,
        };

        const newPost = await fetch('http://localhost:8989/api/users/' + user._id + '/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData),
        }).then(response => response.json());
        formRef.current = null
        console.log(newPost);
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
            <form className="mb-3" data-bs-theme={theme}
                  id="postMaker" onSubmit={create}>
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
                    <button className="btn btn-primary float-end w-auto" type="submit">
                        publish
                    </button>
                </div>
            </form>
        </div>
    );
}

export default PostForm;