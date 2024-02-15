import React from 'react';
import './Comment.css';

class Comment extends React.Component {
    render() {
        const { text, username } = this.props;

        return (
            <div className="card-body" id="comment">
                <h6 className="username" id="userName">{username}:</h6>
                <p className="text">{text}</p>
            </div>
        );
    }
}

export default Comment;