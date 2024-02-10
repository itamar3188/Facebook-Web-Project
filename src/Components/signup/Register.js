import Valid from "./Valid";
import inputs from "../../data/db.json";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";

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
        canvas.width = 176;
        canvas.height = 176;
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
      <div className='wrapper'>
          <form>
            <div className="input-box">
            <input type="text" id="username" placeholder='Username'></input>
            </div>
            <div className="input-box">
            <input type="password" id="password" placeholder='Password'></input>
            </div>
              <div className="input-box">
            <input type="password" id="password_again" placeholder='Password again'></input>
              </div>
                <div className="input-box">
            <input type="text" id="nickname" placeholder='Nickname'></input>
                </div>
            <label>Profile Image:</label>
            <br></br>
            <input
                type="file"
                id="profile"
                accept="image/*"
                onChange={handleImageChange}
            ></input>
            <br></br>
            {imagePreview && (
                <img
                    src={imagePreview}
                    alt="Selected"
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
            )}
            <br></br>
            <button type="button" onClick={submit} className="button">
              Sign up
            </button>
            <Link to='/' className="button" id="Login">Login</Link>
            <br></br>
            <div>
              {inputsLists.map((input) => (
                  <Valid {...input} />
              ))}
            </div>
          </form>
      </div>
  );
}

export default Register;
