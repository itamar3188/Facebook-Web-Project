import {useState, useEffect} from "react";
import config from '../../config'
import {ReactComponent as Trash} from "../Assest/trash.svg";

function FriendsList(user) {
    const [friends, setFriends] = useState(user.user.friends)
    const [friendsData, setFriendsData] = useState([])
    console.log(user.user)

    useEffect(() => {
        async function fetchFriendsData() {
            const fetchedFriendsData = await Promise.all(
                friends.map(async (friendId) => {
                    const res = await fetch('http://localhost:'+config.PORT+'/api/users/' + friendId)
                    return await res.json()
                })
            );
            setFriendsData(fetchedFriendsData);
        }

        fetchFriendsData();
    }, [friends]);

    async function unfriend(friend) {
        console.log('delete')
        const res = await fetch('http://localhost:'+config.PORT+'/api/users/' + user.user._id + '/friends/' + friend._id, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer " + user.user.token
            }
        })
        if (res.ok) {
            setFriends(friends.filter(id => id !== friend._id));
        }
    }

    async function sendRequest(friend) {
        console.log("post")
        const res = await fetch('http://localhost:'+config.PORT+'/api/users/' + friend._id + '/friends', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer " + user.user.token
            }
        })
        if (res.ok) {
            friend.friends_request.includes(user.user._id)
        }

    }

    function isFriend(friendId) {
        return user.user.friends.includes(String(friendId))
    }

    return (
        <div className="offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex="-1" id="offcanvasRight"
             aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {friendsData.map((friend) => (
                    <a href="#" className="list-group-item list-group-item-action" onClick={
                        (e) => {
                            e.preventDefault()
                            setFriends(friend.friends)
                        }
                    } key={`friend-${friend._id}`}>
                        <div className="d-flex w-100 justify-content-between">
                            <img src={friend.profileImage} alt="" width={35} height={35} id="profilePic"/>
                            <p className="text-primary">{friend.displayName}</p>
                            {!isFriend(friend._id) && friend._id !== user.user._id &&
                                <button type="button" className="badge text-bg-warning text-wrap" id="askForFriend"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            sendRequest(friend)
                                        }} disabled={friend.friends_request.includes(user.user._id)}>
                                    <small>friend request</small>
                                </button>
                            }
                            {isFriend(friend._id) &&
                                <button type="button" className="btn" id="deleteButton" onClick={(e) => {
                                    e.stopPropagation();
                                    unfriend(friend)
                                }}><Trash/>
                                </button>
                            }
                        </div>
                    </a>
                ))
                }
            </div>
        </div>
    )
}

export default FriendsList