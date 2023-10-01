import React from 'react'
import './css/article.css'
import {Link } from 'react-router-dom'; 

function  Article({ title, date, content, url}) {

    return(
        <div className='article'>
            <div className='container'>
                <Link to={url} className='article_content'>
                    <div className='article_head'>
                        <span className='article_name'>
                            {title}
                        </span>
                        <span className='article_date'>
                            {date}
                        </span>
                    </div>
                    <div className='article_content_text'>
                        <p>{content}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Article;