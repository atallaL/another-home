import React from 'react'
import {Link} from 'react-router-dom'

import './Contact.css'

function Contact() {
    return (
        <div className="contactMain">
            <div className="contactHeaderContainer">
                <div className="contactHeader">
                    <h1>Contact</h1>
                    <p>You can find our email, phone number, and address below. We're always happy to chat!</p>
                </div>
            </div>
            <div className="contactContent">
                <div className="contact">
                    <div className="contactTop">
                        <i class="bi bi-telephone"></i>
                        <h2>Phone</h2>
                    </div>
                    <p>(613) 743-5837</p>
                </div>
                <div className="contact">
                    <div className="contactTop">
                        <i class="bi bi-envelope"></i>
                        <h2>Email</h2>
                    </div>
                    <p>shelter@another-home.com</p>
                </div>
                <div className="contact">
                    <div className="contactTop">
                        <i class="bi bi-building"></i>
                        <h2>Address</h2>
                    </div>
                    <p>75 Laurier Avenue, Ottawa, Ontario</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;