import './Valid.css'
import {useEffect} from "react";

function Valid({username, password, password_again, nickname, imageType, imgURL}) {

    // Checking that all fields are filled in
    if (username === "" || password === "" ||
        password_again === "" || nickname === "" || imageType === "") {
        return (
            <h6 id="text">All fields are required.</h6>
        );
    }
    // Validity check for username
    const usernamePattern = /^[a-zA-Z0-9]{6,10}$/;
    if (!usernamePattern.test(username)) {
        return (
            <h6 id="text">Username must be 6-10 characters without special characters.</h6>
        );
    }
    // Validity check for password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}$/;
    if (!passwordPattern.test(password)) {
        return (
            <h6 id="text">Password must be 8-14 characters with at least one uppercase,
                one lowercase, and one number, without special characters.</h6>
        );
    }
    // Checking whether the two passwords are the same
    if (password !== password_again) {
        return (
            <h6 id="text">The passwords you typed are not the same.</h6>
        );
    }
    // Validity check for nickname
    const nicknamePattern = /^[a-zA-Z0-9]{4,8}$/;
    if (!nicknamePattern.test(nickname)) {
        return (
            <h6 id="text">Nickname must be 4-8 characters without special characters.</h6>
        );
    }
    // Validity check for image
    const imageFilePattern = /^image\//;
    if (!imageFilePattern.test(imageType)) {
        return (
            <h6 id="text">Please select a valid image file.</h6>
        );
    }

    async function createUser() {
        console.log("create")
        await fetch('http://localhost:8989/api/users', {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                display: nickname,
                profile: imgURL
            })
        }).then(data => data.json());
    }
    createUser()
return (
    <div>
        <h3 id="success"> The registration was successful!</h3>
    </div>
);
}

export default Valid;