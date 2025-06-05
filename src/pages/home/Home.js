import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';
import heroDog from '../../assets/dogyay.jpg';

function Home() {
    return (
        <div className="homeMain">
            <div className="heroSection">
                <div className="heroImageContainer">
                    <img src={heroDog}></img>
                </div>

            </div>
        </div>
    );
}

export default Home;