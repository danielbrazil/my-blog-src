import React, {useState} from "react";
import { Link } from 'react-router-dom';

const AddArticleForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const addArticle = async () => {
        const result = await fetch(`/api/articles/add-article`, {
            method: 'post',
            body: JSON.stringify({ titleName: title, paragraph: content }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        console.log(body.message);
        //alert(body.message);
    };

    return (
        <>
            <div id="add-comment-form">
                <h3>Update Article</h3>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value) }/>
                </label>
                <label>
                    Article:
                    <textarea rows="4" cols="50" value={content} onChange={(event) => setContent(event.target.value) } />
                </label>
                <Link to={`/article-listManagement`}>
                    <button onClick={() => addArticle()}>Add</button>
                </Link>
                <Link to={`/article-listManagement`}>
                    <button type="button" className="btn btn-info">Cancel</button>
                </Link>
            </div>
        </>
    );
};

export default AddArticleForm;

