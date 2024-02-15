import "./Valid.css"
function Valid({username, password, password_again, nickname, imageType})
{
    // Checking that all fields are filled in
    if(username === "" || password === "" ||
        password_again === "" || nickname === "" || imageType === "")
    {
        return (
            <h1>All fields are required.</h1>
        );
    }
    // Validity check for username
    const usernamePattern = /^[a-zA-Z0-9]{6,10}$/;
    if(!usernamePattern.test(username))
    {
        return (
            <h1>Username must be 6-10 characters without special characters.</h1>
        );
    }
    // Validity check for password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}$/;
    if(!passwordPattern.test(password)) {
        return (
            <h1>Password must be 8-14 characters with at least one uppercase,
                one lowercase, and one number, without special characters.</h1>
        );
    }
    // Checking whether the two passwords are the same
    if(password !== password_again)
    {
        return (
            <h1>The passwords you typed are not the same.</h1>
        );
    }
    // Validity check for nickname
    const nicknamePattern = /^[a-zA-Z0-9]{4,8}$/;
    if(!nicknamePattern.test(nickname))
    {
        return (
            <h1>Nickname must be 4-8 characters without special characters.</h1>
        );
    }
    // Validity check for image
    const imageFilePattern = /^image\//;
    if(!imageFilePattern.test(imageType))
    {
        return (
            <h1>Please select a valid image file.</h1>
        );
    }
    // If everything is fine, the registration was successful
    return (
        <h1 id= "success"> The registration was successful!</h1>
    );
}
export default Valid;