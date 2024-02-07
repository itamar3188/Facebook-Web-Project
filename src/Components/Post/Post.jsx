import './Post.css'
import './posts.json'
import picture from '../Assest/flower.jpeg'
import {useState} from "react";
import {ReactComponent as Like} from "./like.svg";
import {ReactComponent as Comments} from "./comment.svg";
import com from '../../comments.json';
import Comment from "../../Comment";

function Post({name, text}) {
    const [iconColor, setIconColor] = useState('#000000');
    const handleButtonClick = () => {
        const newIconColor = iconColor === '#000000' ? '#ffffff' : '#000000';
        setIconColor(newIconColor)
    };
    const [commentList, setComment] = useState(com);

    return (
        <post id="post">
            <div id="post-content">
                <div id="user_id">
                    <img id="profile" src={picture} className="rounded-circle" alt=""/>
                    <h6 id="user">{name}</h6>
                </div>
                <div>
                    <text>{text}</text>
                </div>
                <div id="buttons">
                    <button type="button" className="btn" id="share">
                        share
                    </button>
                    <button type="button" className="btn" id="comments" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                        <Comments/>
                        comments
                    </button>
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                         tabIndex="-1"
                         aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Comments</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {
                                        commentList.map((comments) =>
                                            <Comment {...comments} />
                                        )
                                    }
                                </div>
                                <div className="modal-footer">
                                    <form className="form-control">
                                        <input className="form-control form-control-sm" type="text"
                                               placeholder="add comment" aria-label="form-control-sm"/>
                                        <button className="btn-info" type="submit">add</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleButtonClick} type="button" className="btn" id="like">
                        <Like style={{fill: iconColor}}/>
                        like
                    </button>
                </div>
            </div>
        </post>
    );

}

export default Post;