import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo}) => {
    const upvoteArticle = async () => {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    return (
        <div id="upvotes-section">
            <p>This post has been {upvotes} likes</p>
            <button onClick={() => upvoteArticle()}>Like</button>
        </div>
    )
};

export default UpvotesSection;