import React from 'react';
import './css/header.css';
import {Link, Route, Routes } from 'react-router-dom'; 

import Home from './home'; 
import Posts from './posts';
import Postpage from './postpage';

function Header() {
  return (
    <div>
      <div className='header'>
        <div className='container'>
          <div className='header_content'>
            <div className='header_icon'>
              <Link to="/" className='icon'>
                X
              </Link>
            </div>
            <ul className='header_links'>
              <li className='header_link_container'>
                <Link to="/posts" className='header_link link'>
                  Posts
                </Link>
              </li>
              <li className='header_link_container'>
                <a href='#' className='header_link link'>
                  Publish
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<Posts />} />
            <Route path="/posts/:id" element={<Postpage />} />
        </Routes>
      </div>
  );
}

export default Header;
