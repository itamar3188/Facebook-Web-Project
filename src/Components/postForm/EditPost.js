import React, {useState} from "react";
import {useContext} from "react";
import {ThemeContext} from "../../App/App";

function EditPostForm({post, updatePost, cancel}) {
    const [text, setText] = useState(post.text);
    const [img, setImageURL] = useState(post.img);
    const [newImageFile, setNewImageFile] = useState(null);
    const {theme} = useContext(ThemeContext);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPost = {
            id: post.id,
            username: post.username,
            text,
            img: img ||URL.createObjectURL(newImageFile),
            profilePic : post.profilePic
        };
        updatePost(updatedPost);
    };

    const handleCancel = () => {
        cancel();
    };

    return (
        <div className="edit-post-form">
            <form onSubmit={handleSubmit} className="mb-3" data-bs-theme={theme}
                  id="editPostForm">
        <textarea
            className="form-control"
            rows="auto"
            onChange={handleText}
            value={text}
            placeholder="tell people what you think"
            required
        ></textarea>
                <input
                    onChange={handleImageChange}
                    className="form-control"
                    id="editImageInput"
                    type="file"
                    accept="image/*"
                />
                <figure className="figure">
                    {img && <img src={img} alt="Post"
                                 className="figure-img img-fluid rounded"/>}
                </figure>
                    <button className="btn btn-primary float-end" type="submit">
                        save changes
                    </button>
                    <button className="btn btn-secondary float-end me-2"
                            type="button" onClick={handleCancel}>
                        cancel
                    </button>
            </form>
        </div>
);
}

export default EditPostForm;