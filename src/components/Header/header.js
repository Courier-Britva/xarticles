import React from 'react';
import styles from './header.module.css';
import {Link} from 'react-router-dom'; 

function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_content}>
            <div className={styles.header_icon}>
              <Link to="/" className={styles.icon}>
                X
              </Link>
            </div>
            <ul className={styles.header_links}>
              <li className={styles.header_link_container}>
                <Link to="/posts" className={styles.header_link}>
                  Posts
                </Link>
              </li>
                <li className={styles.header_link_container}>
              <Link to="/" className={styles.header_link}>
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
