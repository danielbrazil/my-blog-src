import React from "react";

const CommentsList = ({ comments }) => {
    if (comments.length > 0) {
        return (
            <div>
                <h3>Comments:</h3>
                {comments.map((comment, key) => (
                    <div className="comment" key={key}>
                        <h4>User: {comment.username}</h4>
                        <p>{comment.text}</p>
                    </div>
                ))}
            </div>
        );
    } else {
        return (
            <div>
                <h3>Comments:</h3>
                <p>No have comments.</p>
            </div>
        );        
    }
};

export default CommentsList;