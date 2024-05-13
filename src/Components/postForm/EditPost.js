import React, {useRef, useState} from "react";
import {useContext} from "react";
import {ThemeContext} from "../../App/App";

function EditPostForm({post, updatePost, cancel, user}) {
    const [text, setText] = useState(post.text);
    const [img, setImageURL] = useState(post.img);
    const [, setNewImageFile] = useState(null);

    const {theme} = useContext(ThemeContext);
    const textRef = useRef(post.text)
    const imgRef = useRef(post.img)

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImageURL(e.target.result);
                setNewImageFile(file);
            };
            reader.readAsDataURL(file);
        } else {
            setImageURL("");
            setNewImageFile(null);
        }
    };

    async function edit(e) {
        e.preventDefault()
        console.log('edit')
        const edit = await fetch('http://localhost:8989/api/users/' + user._id + '/posts/' + post._id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer " + user.token
            },
            body: JSON.stringify({
                img: img,
                text: text
            })
        })
        if (await edit.json() === null) {
            alert("there is a bad link. we can't allow you to publish it!")
        } else {
            const edited = post
            edited.text = text
            edited.img = img
            updatePost(post._id, edited);
        }
    }

    const handleCancel = () => {
        textRef.current = post.text
        imgRef.current = post.img
        cancel();
    };

    return (
        <div className="edit-post-form">
            <form onSubmit={edit} className="mb-3" data-bs-theme={theme}
                  id="editPostForm">
        <textarea
            className="form-control"
            rows="auto"
            onChange={handleText}
            ref={textRef}
            value={text}
            placeholder="tell people what you think"
            required
        ></textarea>
                <input
                    onChange={handleImageChange}
                    className="form-control"
                    id="editImageInput"
                    ref={imgRef}
                    type="file"
                    accept="image/*"
                />
                <figure className="figure">
                    {img && <img src={img} alt="Post"
                                 className="figure-img img-fluid rounded"/>}
                </figure>
                <button id="save changes" className="btn btn-primary float-end w-auto" type="submit">
                    save changes
                </button>
                <button className="btn btn-secondary btn-outline-danger float-end me-2 w-auto"
                        type="button" onClick={handleCancel}>
                    cancel
                </button>
            </form>
        </div>
    );
}

export default EditPostForm;