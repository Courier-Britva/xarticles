import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Article.module.css';

export function Article() {
    let { id } = useParams();
    const [article, setArticle] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 

    useEffect(() => {
        fetch('/articles.json')
            .then(response => response.json())
            .then(data => {
                setArticle(data[id]);
                setIsLoaded(true);
            });
    }, [id]); 

    if (!isLoaded) {
        return( 
            <div 
                className={styles.container}
            >
                <div 
                    style={{
                        color: "#ffffff"
                    }}
                >
                    Loading...
                </div>
            </div>
    )}

    if (!article) {
        return (
            <div 
                className={styles.article_not_found}
            >
                This article does not exist...
            </div>
        )
    }

    return (
        <div  
            className={styles.container} 
        >
            <div  
                className={styles.article_return_container}
            >
                <Link 
                    to="/posts/" 
                    className={styles.article_return}
                >
                    Get me back
                </Link>
            </div>

            <img 
                className={styles.article_bigpic_img} 
                alt={article.name} 
                src={article.img}></img>
            
            <div  
                className={styles.article}
            >
                <div 
                    className={styles.article_content}
                >
                    <div 
                        className={styles.article_head}
                    >
                        <span  
                            className={styles.article_name}
                        >
                            {article.name}
                        </span>
                        <span 
                            className={styles.article_date}
                        >
                            {article.date}
                        </span>
                    </div>
                    <div 
                        className={styles.article_content_text}
                    >
                        <p>{article.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}