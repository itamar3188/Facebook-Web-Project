import Valid from "./Valid";
import inputs from "../../data/db.json";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Style.css";
import Fakebook from "../Assest/fakebook.png";

function Register() {
    const [inputsLists, setInputs] = useState(inputs);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);

        // Create a thumbnail of the selected image with dimensions 176x176
        const reader = new FileReader();
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;

            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                canvas.width = 54;
                canvas.height = 54;
                ctx.drawImage(img, 0, 0, 176, 176);

                setImagePreview(canvas.toDataURL());
            };
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const submit = () => {
        const input = {
            "username": document.getElementById("username").value,
            "password": document.getElementById("password").value,
            "password_again": document.getElementById("password_again").value,
            "nickname": document.getElementById("nickname").value,
            "imageType": selectedImage?.type || ""
        };
        setInputs([input]);
    };

    return (
        <div className="mask">
            <div className="d-flex justify-content-around">
                <img src={Fakebook} alt="logo" height={100} id="logo"/>
                <div className="card" id="wrapper">
                    <form className="needs-validation" noValidate>
                        <div className="mb-3">
                            <label htmlFor="username"
                                   className="form-label m-1">username</label>
                            <input className="form-control" type="text"
                                   id="username"
                                   placeholder='Username' required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"
                                   className="form-label m-1">password</label>
                            <input className="form-control" type="password"
                                   id="password"
                                   placeholder='Password' required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password"
                                   className="form-label m-1">password
                                twice</label>
                            <input className="form-control" type="password"
                                   id="password_again"
                                   placeholder='Password again' required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor='nickname'
                                   className="form-label m-1">display
                                name</label>
                            <input className="form-control" type="text"
                                   id="nickname"
                                   placeholder='Nickname' required/>
                        </div>
                        <div className="d-flex justify-content-betweenmb-3">
                            <label htmlFor="formfile"
                                   className="form-label mb-1">Profile
                                Image:</label>
                            <input className="form-control" type="file"
                                   id="formfile" accept="image/*"
                                   onChange={handleImageChange} required/>
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Selected"
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "100%"
                                    }}
                                />
                            )}
                        </div>
                        <div className="d-flex justify-content-between">
                            <button onClick={submit} type="button"
                                    className="btn btn-primary w-25">
                                Sign up
                            </button>
                            <p><a href="../Login"
                                  className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                                <Link to='/'>Login</Link>
                            </a></p>
                        </div>
                        <div>
                            {inputsLists.map((input) => (
                                <Valid {...input} />
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
