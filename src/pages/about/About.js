import React from 'react'
import {Link} from 'react-router-dom'

import './About.css'

function About() {
    return (
        <div className="aboutMain">
            <div className="aboutHeaderContainer">
                <div className="aboutHeader">
                    <h1>About</h1>
                    <p>Below is information about our mission, rescue, and what we can do to help you!</p>
                </div>
            </div>

            <div className="aboutDivider"></div>

            <div className="aboutContent">
                <h2>Another Home</h2>
                <p>At Another Home, all animals are treated with love, respect, and care. Our goal is to provide a temporary shelter for displaced or abandoned animals while doing our best job in keeping them healthy and happy.</p>
                <h2>Our services</h2>
                <p>For animals, one of our priorities is shelter variety so that we can shelter many types of animals. We currently have the space to keep dogs, cats, rabbits, and birds, though these spaces may be full (fill out a rehoming form to see if we have availabilities for your animal).</p>
                <p>For people, our main services are adoption and rehoming. Through our <Link to="/adopt">adoption process</Link>, we will be able to guide you into picking an animal that's perfect for your current lifestyle. We also provide a <Link to="/rehome">rehoming service</Link> where we can ensure that you will feel secure knowing that your animal will be treated with the utmost care.</p>
                <h2>Contact us</h2>
                <p>If you still have questions, <Link to='/contact'>click here</Link> to see our contact information. Feel free to get in touch!</p>
            </div>
        </div>
    );
}

export default About;