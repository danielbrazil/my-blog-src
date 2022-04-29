import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const UpdateArticleForm = ({match}) => {
    const articleName = match.params.name;
    const articleTitle = match.params.title;
    const articleContent = match.params.content;
    console.log(articleName);
    const [title, setTitle] = useState(articleTitle);
    const [content, setContent] = useState(articleContent);

    const updateArticle = async () => {
        const result = await fetch(`/api/articles/update/${articleName}`, {
            method: 'post',
            body: JSON.stringify({ titleUpdate: title, paragraph: content }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const body = await result.json();
        //alert(body.message);
        console.log(body.message);
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
                    <button onClick={() => updateArticle()}>Update</button>
                </Link>
                <Link to={`/article-listManagement`}>
                    <button type="button" className="btn btn-info">Cancel</button>
                </Link>
            </div>
        </>
    );
};

export default UpdateArticleForm;