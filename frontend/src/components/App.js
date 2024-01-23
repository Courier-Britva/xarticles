import React from 'react';
import Header from './Header/header.js';
import {Route, Routes } from 'react-router-dom'; 
import Home from './Home/home.js'; 
import Posts from './Posts/posts.jsx'
import { Article} from './Article/Article.jsx';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path="/posts/:id" element={<Article />} />
        </Routes>
    </>
  );
}

export default App;
