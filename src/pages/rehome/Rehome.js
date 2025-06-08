import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

import './Rehome.css'

function Rehome() {

    const nav = useNavigate();

    const handleFormSubmission = (e) => {
        e.preventDefault();
        nav('/rehome/confirm');
    };

    return (
        <div className="rehomeMain">
            <div className="rehomeHeader">
                <h1>Rehome</h1>
                <p>We understand how difficult it can be to care for a pet. If you're looking for a safe and loving place for your animal, we will help you every step of the way. </p>
                <p>By filling in both sections of this form, you will know if this is the right move for you and your future, as well as the future of your pet.</p>
            </div>
            <div className="rehomeFormsContainer">
                <div className="rehomeFormsContent">
                    <h2>Rehome Form</h2>
                    <form onSubmit={handleFormSubmission}>
                        <div className="rehomeForms">
                            <div className="rehomeForm">
                                <h3>Your Information</h3>
                                <div className="rehomeFormElement">
                                    <label>Full Name</label>
                                    <input type="text" name="name" required></input>
                                </div>
                                <div className="rehomeFormElement">
                                    <label>Email</label>
                                    <input type="email" name="email" required></input>
                                </div>
                                <div className="rehomeFormElement">
                                    <label>Phone Number (10 digits)</label>
                                    <input type="tel" name="phoneNumber" pattern="[0-9]{10}" required></input>
                                </div>
                            </div>
                            <div className="rehomeForm">
                                <h3>Your Animal's Information</h3>
                                <div className="rehomeFormElement">
                                    <label>Pet's Name</label>
                                    <input type="text" name="petName" required></input>
                                </div>
                                <div className="rehomeFormElement">
                                    <label>Species</label>
                                    <select name="species" required>
                                        <option value="">...</option>
                                        <option value="dog">Dog</option>
                                        <option value="cat">Cat</option>
                                        <option value="rabbit">Rabbit</option>
                                        <option value="bird">Bird</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="rehomeFormElement">
                                    <label>Breed(s)</label>
                                    <input type="text" name="breed"></input>
                                </div>
                                <div className="rehomeFormElement">
                                    <label>Age</label>
                                    <input type="text" name="age"></input>
                                </div>
                                <div className="rehomeFormElement">
                                    <label>Sex</label>
                                    <select name="sex" required>
                                        <option value="">...</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="unknown">Unknown</option>
                                    </select>
                                </div>
                                <div className="rehomeFormElement">
                                    <label>Neutered?</label>
                                    <select name="neutered" required>
                                        <option value="">...</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="unknown">Unknown</option>
                                    </select>
                                </div>
                                <div className="rehomeFormElement"> 
                                    <label>Vaccinated?</label>
                                    <select name="vaccinated" required>
                                        <option value="">...</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                        <option value="unknown">Unknown</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button type="submit">Submit Form</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Rehome;