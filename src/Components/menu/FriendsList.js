import {useState} from "react";

function FriendsList() {
    async function getFriends() {
        const [friends, setFriendsList] = useState(null)
        async function callServer(){
            const id = 123
            const friends = await fetch('http://localhost:8989/users' + id +'/friends',{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "autorization": "bearer " + token
                }
            })
            setFriendsList(await friends.json())
        }
    }
    return (
            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-body">
                    ...
                </div>
            </div>
    )
 }

 export default FriendsList