import React, { useState} from "react";
import './Post.css'
import {useContext} from "react";
import {ReactComponent as Like} from "../Assest/like.svg";
import {ReactComponent as CommentsIcon} from "../Assest/comment.svg";
import Comments from "../CommentsList/CommentModal";
import {ThemeContext} from "../../App/App";

function Post({post}) {
    const {name, text, img} = post
    const {theme} = useContext(ThemeContext)
    const [iconColor, setIconColor] = useState('#000000');
    const handleButtonClick = () => {
        const newIconColor = iconColor === '#000000' ? '#7eccec' : '#000000';
        setIconColor(newIconColor)
    };
    return (
        <post id="post">
            <div className="card border-black" id="post"
                 data-bs-theme={theme}>
                <div className="card-body" id="post-content">
                    <div id="user_id">
                        <h6 id="user">{name}</h6>
                    </div>
                    <div>
                        <img src={img} className="card-img" alt="" id="img"/>
                        <p>{text}</p>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-black"
                     id="buttons">
                    <button type="button" className="btn" id="share">
                        share
                    </button>
                    <button type="button" className="btn" id="comments"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                        <CommentsIcon/>
                        comments
                    </button>
                    <Comments/>
                    <button onClick={handleButtonClick} type="button"
                            className="btn" id="like">
                        <Like style={{fill: iconColor}}/>
                        like
                    </button>
                </div>
            </div>
        </post>
    )
        ;

}

export default Post;