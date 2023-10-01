import React from "react";
import './css/posts.css';
import Article from "./post";
import {useParams } from 'react-router-dom';


function Posts(){
    const { id } = useParams();

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

    const page = articles.find((item) => item.id === parseInt(id, 10));
    return (
    <div>
        {articles.map((article) => (
        <Article key={article.id} url={article.url} title={article.title} content={article.content} date ={article.date}/>
        ))}
    </div>
    );
}

export default Posts;