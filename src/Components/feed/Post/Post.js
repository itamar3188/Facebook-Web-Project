import './Post.css'
import '../../../data/posts.json'
import {ReactComponent as picture} from "../../Assest/person-circle.svg";
import {useState} from "react";
import {ReactComponent as Like} from "../../Assest/like.svg";
import Comments from '../CommentsList/Comments';
function Post({name, text}) {
    const [iconColor, setIconColor] = useState('#000000');
    const handleButtonClick = () => {
        const newIconColor = iconColor === '#000000' ? '#ffffff' : '#000000';
        setIconColor(newIconColor)
    };

    return (
        <post id="post">
            <div id="post-content">
                <div id="user_id">
                    <img id="profile" src={picture} className="rounded-circle"
                         alt=""/>
                    <h6 id="user">{name}</h6>
                </div>
                <div>
                    <text>{text}</text>
                </div>
                <div id="buttons">
                    <button type="button" className="btn" id="share">
                        share
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
    );

}

export default Post;