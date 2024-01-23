import React, { useState } from 'react'
import styles from './home.module.css';

function Home() {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/save_to_file/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ textData: text }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return(
        <div 
            className={styles.home}
        >

            <div 
                className={styles.container}
            >
                <div 
                    className={styles.home_content}
                >
                    <div
                        className={styles.home_head}
                    >

                        <h1 
                            className={styles.home_welcome}
                        >
                            Welcome to Xarticles!
                        </h1>

                        <p 
                            className={styles.home_about}
                        >
                            If you are inerested in any news <strong>leave your email here</strong> 
                        </p>

                    <form onSubmit={handleSubmit} className={styles.form_container}>

                        <input
                            type="email"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className={styles.form_input}
                            placeholder='youremail@gmail.com'
                        />

                        <button 
                            type="submit" 
                            className={styles.home_posts_link}
                        >
                            Im In!
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;