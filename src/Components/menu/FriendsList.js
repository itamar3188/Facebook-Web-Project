import {useState} from "react";

function FriendsList(user) {
    const [friends, setFriends] = useState(user.user)
    const [friendsData, setFriendsData] = useState([])
    async function getFriends() {
        const callServer = await fetch()
    }
    return (
            <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <a href="#" className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            {

                            }
                        </div>
                    </a>
                </div>
            </div>
    )
}

export default FriendsList