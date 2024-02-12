import Valid from "./Valid";
import inputs from "../../data/db.json"
import {useState} from "react";

function Register() {
  const [inputsLists, setInputs] = useState(inputs)
  const submit = () => {
    const input = {
      "username": document.getElementById("username").value,
      "password": document.getElementById("password").value,
      "password_again": document.getElementById("password_again").value,
      "nickname": document.getElementById("nickname").value,
      "imageType": document.getElementById("profile").files[0]?.type || ""
    }
    setInputs([input])
  }
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>Username:</label><br></br>
            <input type="text" id="username"></input><br></br>
            <label>Password:</label><br></br>
            <input type="password" id="password"></input><br></br>
            <label>Password again:</label><br></br>
            <input type="password" id="password_again"></input><br></br>
            <label>Nickname:</label><br></br>
            <input type="text" id="nickname"></input><br></br>
            <label>Profile Image:</label><br></br>
            <input type="file" id="profile" accept="image/*"></input><br></br>
          <button type="button" onClick={submit}>Sign up</button><br></br>
          <div>
            {
              inputsLists.map((input) =>
                  <Valid {...input}/>
              )
            }
          </div>
        </form>
      </header>
    </div>
  );
}

export default Register;
