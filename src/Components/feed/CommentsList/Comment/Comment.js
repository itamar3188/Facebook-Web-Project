import './Comment.css'
function Comment({name, body}) {
    return (
        <comment id="commentBox">
            <div id="comment">
                <h6 id="userName">{name}:</h6>
                <text >{body}</text>
            </div>
        </comment>
    );
};
export default Comment;