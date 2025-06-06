import React, {useRef} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import './Home.css';
import dogImg from '../../assets/homecat.jpg';
import catImg from '../../assets/homedog.jpeg';
import tapeImg from '../../assets/tape.png';

import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {

    //hold home content to scroll later
    const mainContentRef = useRef(null);

    const nav = useNavigate();

    //scroll to main content
    const scrollToContent = () => {
        mainContentRef.current.scrollIntoView({behavior:'smooth'});
    }

    return (

        <div className="homeMain">
            <div className="heroSection">
                <div className="heroImageContainer">
                    <div className="heroContent">
                        <h1>Another Home</h1>
                        <p>We're dedicated to creating the second chances that animals deserve while providing comfort to the people who love them.</p>
                        <button onClick={scrollToContent}>Start Exploring</button>
                    </div>
                </div>

            </div>
            <div className="homeContent" ref={mainContentRef}>
                <div className="homeSection">
                    <div className="homeSectionContent">
                        <h2>Want to adopt?</h2>
                        <p>Do you want to adopt the perfect pet for you? Look through animals that we're currently sheltering and find your next companion today!</p>
                        <button onClick={() => nav('/adopt')}>Adopt</button>
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
                         <button onClick={() => nav('/rehome')}>Rehome</button>
                    </div>
                </div>
            </div>
            <div className="mainBottom">
                <div className="mainBottomHeader">
                    <h2>Learn more about us</h2>
                </div>
                <div className="mainBottomSections">
                    <div className="mainBottomSection">
                        <div className="botSecContent">
                            <i class="bi bi-heart"></i>
                            <p>Click here to learn more about our mission, rescue, and what we can do to help you!</p>
                        </div>
                        <div className="botSecLink">
                            <Link to='/about'>About us →</Link>
                        </div>
                    </div>
                    <div className="mainBottomSection">
                        <div className="botSecContent">
                            <i class="bi bi-telephone-inbound"></i>
                            <p>We would love to chat! Contact us if you have any outstanding questions or concerns.</p>
                        </div>
                        <div className="botSecLink">
                            <Link to='/contact'>Contact us →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;