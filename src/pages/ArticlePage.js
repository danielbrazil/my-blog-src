import React, {useState, useEffect} from 'react';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';
import AddCommentForm from '../components/AddCommentForm';
import ArticleContentDb from './ArticleContentDb';
import NotFoundPage from './NotFoundPage';
import { Link } from 'react-router-dom';

const ArticlePage = ( {match} ) => {
    const name = match.params.name;
    const allArticles = ArticleContentDb();
    const article = allArticles.find(art => art.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
        //setArticleInfo({upvotes: Math.ceil(Math.random() * 10)});
    }, [name]);

    if (!article) return <NotFoundPage/>

    const otherArticles = allArticles.filter(art => art.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            <UpvotesSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
            <p>{article.content}</p>
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
            <Link to={`/articles-list`}>Go back to Articles page</Link>
        </>
    );
};

export default ArticlePage;