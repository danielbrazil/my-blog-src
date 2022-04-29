import React from 'react';
import ArticlesList from '../components/ArticlesList';
import ArticleContentDb from './ArticleContentDb';

const ArticlesListPage = () => {

    return (
        <>
            <h1>Articles</h1>
            <ArticlesList articles={ArticleContentDb()} />
        </>
    )
};

export default ArticlesListPage;