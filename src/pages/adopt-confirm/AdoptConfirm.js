import React from 'react'
import {Link} from 'react-router-dom'

import './AdoptConfirm.css'
import logo from '../../assets/redlogosymbol.png'

function AdoptConfirm() {
    return (
        <div className="aConfirmMain">
            <div className="aConfirmContent">
                <h1>Thank you!</h1>
                <p>Thanks for your interest in adopting one of our amazing animals!</p>
                <p>To continue the process of adoption or to learn more about it, please <Link to="/contact">contact us here</Link>. We can give you more information on the animal you're interested in and set up an in-person meeting if you feel like this is the perfect companion for you!</p>
                <div className="aConfirmHome">
                <img src={logo} />
                <p><Link to='/'>Back home</Link></p>
                </div>
            </div>
        </div>
    );
}

export default AdoptConfirm;