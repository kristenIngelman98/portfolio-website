import * as React from 'react';
import Button from '../components/Button';
import App from '../App';

function Home() {
    return (
        <div className="home_wrapper">
            <App />
            {/*<div className="line-1 anim-typewriter">
                <p>Hi there, nice to meet you! I am Kristen, a Front-End Developer.</p>
                
    </div> */}
            <h1>Hi there, welcome to my website!</h1>
            <Button />
        </div>
    );
}

export default Home;
