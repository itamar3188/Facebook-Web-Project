import Valid from "./Valid";
import inputs from "../data/db.json";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css"

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
      <div className="App">
        <header className="App-header">
          <form>
            <label>Username:</label>
            <br></br>
            <input type="text" id="username"></input>
            <br></br>
            <label>Password:</label>
            <br></br>
            <input type="password" id="password"></input>
            <br></br>
            <label>Password again:</label>
            <br></br>
            <input type="password" id="password_again"></input>
            <br></br>
            <label>Nickname:</label>
            <br></br>
            <input type="text" id="nickname"></input>
            <br></br>
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
            <button type="button" onClick={submit}>
              Sign up
            </button>
            <br></br>
            <div>
              {inputsLists.map((input) => (
                  <Valid {...input} />
              ))}
            </div>
          </form>
        </header>
        <Link to="/">Login</Link>
      </div>
  );
}

export default Register;
