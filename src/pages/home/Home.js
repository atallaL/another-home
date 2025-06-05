import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';

function Home() {
    return (
        <div className="homeMain">
            <div className="heroSection">
                <div className="heroImageContainer">
                    <div className="heroContent col-md-4">
                        <h1>Another Home</h1>
                        <p>We're dedicated to creating the second chances that animals deserve while providing comfort to the people who love them.</p>
                    </div>
                </div>

            </div>
            <div className="homeContent">

            </div>
        </div>
    );
}

export default Home;