import React from 'react'
import './css/home.css'
import {Link} from 'react-router-dom'; 

function Home() {
    return(
        <div className='home'>
            <div className='container'>
                <div className='home_content'>
                    <div className='home_head'>
                        <h1 className='home_welcome white'>
                            Welcome to Xarticles!
                        </h1>
                        <p className='home_about white'>
                            A place that collects articles that you <strong>actually google</strong> 
                        </p>
                        <Link to="/posts" className='home_posts_link'>
                            Start my journey
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;