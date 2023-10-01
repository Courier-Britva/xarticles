import React, { useEffect, useState } from 'react';
import './css/article.css'


function  Postpage() {

    const [articleId, setArticleId] = useState(null);

    // Use useEffect to parse the URL and extract the article ID
    useEffect(() => {
      const url = window.location.pathname;
      const idMatch = url.match(/\/posts\/(\d+)/);
  
      if (idMatch) {
        const id = parseInt(idMatch[1], 10);
        setArticleId(id);
      }
    }, []);
  
    const articles = [
        {
          id: 0,
          url: '/posts/0/',
          title: 'Article 1',
          date: '11.02.2012',
          content: 'This is content written for display content for article 1',
        },
        {
          id: 1,
          url: '/posts/1/',
          title: 'Article 2',
          date: '13.02.2012',
          content: 'this text were written for article number two',
        },
        {
          id: 2,
          url: '/posts/2/',
          title: 'Article 3',
          date: '15.02.2012',
          content: 'three three three three',
        },
    ];
  
    // Find the article based on the extracted articleId
    const article = articles[articleId];
  
    if (!article) {
      return <div>Article not found</div>;
    }


    return(
        <div className='article'>
            <div className='container'>
                <div className='article_content'>
                    <div className='article_head'>
                        <span className='article_name'>
                            {article.title}
                        </span>
                        <span className='article_date'>
                            {article.date}
                        </span>
                    </div>
                    <div className='article_content_text'>
                        <p>{article.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Postpage;