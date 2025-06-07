import React from 'react'
import {Link} from 'react-router-dom'

import './Adopt.css'

//animal photos
import barry from '../../assets/available-animals/barry.jpg';
import spot from '../../assets/available-animals/spot.jpg';
import cindy from '../../assets/available-animals/cindy.png';
import mittens from '../../assets/available-animals/mittens.jpg';
import bartholomew from '../../assets/available-animals/bartholomew.jpg';

function Adopt() {
    return (
        <div className="adoptMain">
            <div className="adoptHeader">
                <h1>Adopt</h1>
                <p>Adopting an animal can be one of the most rewarding things a person can do, both for themselves and for the animal whom they provide a loving household. Let us help you find your perfect companion through the list of amazing animals provided below.</p>
            </div>

            <div className="adoptContentContainer">
                <div className="adoptContent">
                    <div className="adoptContentHeader">
                        <h2>Available animals</h2>
                    </div>
                    <div className="adoptGrid">
                        <div className="adoptGridSection">
                            <img src={barry}></img>
                            <div className="adoptGridInfo">
                                <h3>Barry</h3>
                                <p>3mo</p>
                            </div>
                        </div>
                        <div className="adoptGridSection">
                            <img src={spot}></img>
                            <div className="adoptGridInfo">
                                <h3>Spot</h3>
                                <p>3y 8mo</p>
                            </div>
                        </div>
                        <div className="adoptGridSection">
                            <img src={cindy}></img>
                            <div className="adoptGridInfo">
                                <h3>Cindy</h3>
                                <p>7mo</p>
                            </div>
                        </div>
                        <div className="adoptGridSection">
                            <img src={mittens}></img>
                            <div className="adoptGridInfo">
                                <h3>Mittens</h3>
                                <p>3mo</p>
                            </div>
                        </div>
                        <div className="adoptGridSection">
                            <img src={bartholomew}></img>
                            <div className="adoptGridInfo">
                                <h3>Bartholomew</h3>
                                <p>2y</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adopt;