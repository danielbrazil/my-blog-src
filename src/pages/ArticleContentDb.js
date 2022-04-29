import {useState, useEffect} from 'react';

const ArticleContentDb = () => {
    
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/getAllArticles`);
            const body = await result.json();
            setArticles(body);
        }
        fetchData();
    }, []);

    return articles;
};


export default ArticleContentDb;