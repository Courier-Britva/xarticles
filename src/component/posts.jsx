import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ParamsExample() {
    const [articles, setArticles] = useState({});

    useEffect(() => {
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
            });
    }, []); 

    return (
        <div className='container'>
            <h1>Articles</h1>
            {Object.entries(articles).map(([id, article]) => (
                <div key={id} className='article'>
                    <Link to={`/posts/${id}`} className='article_content'>
                        <div className='article_head'>
                            <span className='article_name'>
                                {article.name}
                            </span>
                            <span className='article_date'>
                                {article.date}
                            </span>
                        </div>
                        <div className='article_content_text'>
                            <p>{article.content.substring(0, 100)}...</p>
                        </div>
                        <img className="article_img" alt={article.name} src={article.img}></img>
                    </Link>
                </div>
            ))}
        </div>
    );
}
