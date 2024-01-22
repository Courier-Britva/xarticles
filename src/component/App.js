import React from 'react';
import './css/header.css';
import Header from './header';
import {Route, Routes } from 'react-router-dom'; 
import Home from './home'; 
import Posts from './posts.jsx'
import { Article} from './article.jsx';

function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts/' element={<Posts />} />
            <Route path="/posts/:id" element={<Article />} />
        </Routes>
    </>
  );
}

export default App;
