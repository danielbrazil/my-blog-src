import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import ArticleListManagement from './pages/ArticleListManagement';
import UpdateArticleForm from './components/UpdateArticleForm';
import DeleteArticle from './components/DeleteArticle';
import AddArticleForm from './components/AddArticleForm';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/articles-list" component={ArticlesListPage} />
              <Route path="/article-listManagement" component={ArticleListManagement} />
              <Route path="/article/:name" component={ArticlePage} />
              <Route path="/articles/add-article" component={AddArticleForm} />
              <Route path="/articles/:name/:title/:content" component={UpdateArticleForm} />
              <Route path="/articles_delete/:name" component={DeleteArticle}/>
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
