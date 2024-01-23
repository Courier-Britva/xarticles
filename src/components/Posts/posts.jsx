import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './posts.module.css';
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
        <div className={styles.container}>
            <h1>Articles</h1>
            {Object.entries(articles).map(([id, article]) => (
                <div key={id}  className={styles.article}>
                    <Link to={`/posts/${id}`}  className={styles.article_content}>
                        <div className={styles.article_head}>
                            <span className={styles.article_name}>
                                {article.name}
                            </span>
                            <span className={styles.article_date}>
                                {article.date}
                            </span>
                        </div>
                        <div className={styles.article_content_text}>
                            <p>{article.content.substring(0, 100)}...</p>
                        </div>
                        <img className={styles.article_img} alt={article.name} src={article.img}></img>
                    </Link>
                </div>
            ))}
        </div>
    );
}
