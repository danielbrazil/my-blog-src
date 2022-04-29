import React from "react";
import { Link } from 'react-router-dom';

const DeleteArticle = ({match}) => {

    const articleName = match.params.name;
    const deleteArticle = async () => {
        const result = await fetch(`/api/articles_delete/${articleName}`);
        const body = await result.json();
        //alert(body.message);
        console.log(body.message);
    };

    return (
        <>
            <div id="add-comment-form">
                <h3>Do you agree to delete the {articleName}?</h3>
                <Link to={`/article-listManagement`}>
                    <button onClick={() => deleteArticle()}>Yes</button>
                </Link>
                <Link to={`/article-listManagement`}>
                    <button type="button" className="btn btn-info">No</button>
                </Link>
            </div>
        </>
    );
};

export default DeleteArticle;