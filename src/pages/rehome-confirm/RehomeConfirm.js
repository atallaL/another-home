import React from 'react'
import {Link} from 'react-router-dom'

import './RehomeConfirm.css'
import logo from '../../assets/redlogosymbol.png'

function RehomeConfirm() {
    return (
        <div className="rConfirmMain">
            <div className="rConfirmContent">
                <h1>Submission Successful</h1>
                <p>Thank you for the submission and doing what you think is right for your animal.</p>
                <p>Your form has been received and will be reviewed by one of trusted staff members. We will send you an email shortly regarding next steps for this process.</p>
                <div className="rConfirmHome">
                <img src={logo} />
                <p><Link to='/'>Back home</Link></p>
                </div>
            </div>
        </div>
    );
}

export default RehomeConfirm;