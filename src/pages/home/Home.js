import React from 'react';
import {Link} from 'react-router-dom';

import './Home.css';
import dogImg from '../../assets/homecat.jpg';
import catImg from '../../assets/homedog.jpeg';
import tapeImg from '../../assets/tape.png';

function Home() {
    return (
        <div className="homeMain">
            <div className="heroSection">
                <div className="heroImageContainer">
                    <div className="heroContent col-md-4">
                        <h1>Another Home</h1>
                        <p>We're dedicated to creating the second chances that animals deserve while providing comfort to the people who love them.</p>
                        <button>Start Exploring</button>
                    </div>
                </div>

            </div>
            <div className="homeContent">
                <div className="homeSection">
                    <div className="homeSectionContent">
                        <h2>Want to adopt?</h2>
                        <p>Do you want to adopt the perfect pet for you? Look through animals that we're currently sheltering and find your next companion today!</p>
                        <button>Adopt</button>
                    </div>
                    <div className="homeSectionImage">
                        <img src={dogImg}/>
                    </div>
                </div>
                <div className="homeDivider"></div>
                <div className="homeSection">
                    <div className="homeSectionImage">
                        <img src={catImg}/>
                    </div>
                    <div className="homeSectionContent">
                        <h2>Rehome a pet</h2>
                        <p>We understand how difficult it can be to care for a pet. If you're looking for a safe and loving place for your animal, we will help you every step of the way.</p>
                         <button>Rehome</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;