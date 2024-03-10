import React, {useRef, useState} from "react";
import {useContext} from "react";
import {ThemeContext} from "../../App/App";
import './PostForm.css'
import ProfilePic from "../Assest/person-circle.svg";

function PostForm({addPost}) {
    const [text, setText] = useState("");
    const [img, setImageURL] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const {theme} = useContext(ThemeContext);
    const formRef = useRef();

    async function create() {
        const id = 123;
        console.log('edit');

        const requestData = {
            display: 'user1',
            profile: ProfilePic,
            img: imageFile,
            text: text,
        };

        const newPost = await fetch('http://localhost:8989/users/' + id + '/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData),
        }).then(response => response.json());

        console.log(newPost);
    }

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageURL(e.target.result);
                setImageFile(file)
            };
            reader.readAsDataURL(file);
        } else {
            setImageURL("");
            setImageFile(null);
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