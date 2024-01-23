import React from 'react'
import {Link} from 'react-router-dom'; 
import styles from './home.module.css';

function Home() {
    return(
        <div className={styles.home}>
            <div  className={styles.container}>
                <div className={styles.home_content}>
                    <div  className={styles.home_head}>
                        <h1 className={styles.home_welcome}>
                            Welcome to Xarticles!
                        </h1>
                        <p className={styles.home_about}>
                            A place that collects articles that you <strong>actually google</strong> 
                        </p>
                        <Link to="/posts" className={styles.home_posts_link}>
                            Start my journey
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;