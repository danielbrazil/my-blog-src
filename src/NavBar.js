import React from 'react';
import {Link} from 'react-router-dom';
import ArticleContentDb from './pages/ArticleContentDb';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/articles-list">Articles</Link>
                <Link to="/article-listManagement" articles={ArticleContentDb()}>
                    Articles - Management
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;