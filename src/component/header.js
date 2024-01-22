import React from 'react';
import './css/header.css';
import {Link} from 'react-router-dom'; 

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
              <Link to="/" className='header_link link'>
                  Log in
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Header;
