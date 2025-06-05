//top bar for all pages but home bc home doesnt need the little menu ico

import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Topbar.css'
import {Link, useNavigate} from 'react-router-dom'

import logoRed from '../assets/redlogo.png';


const Topbar = () => {

  //states
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  //navigate
  const nav = useNavigate();

  return (
    <div className="topbarContainer">
        <div className="topbarElements">
            <div className="topbarLogo">
                <Link to="/">
                  <img className="topbarLogoImage" src={logoRed}/>
                </Link>
            </div>

            {/* hamburger */}
            <div className={`topbarHamburger ${hamburgerOpen ? 'opened' : ''}`} onClick={() => setHamburgerOpen(prev => !prev)}>
              <i className="bi bi-list"/>
            </div>

            <div className={`topbarLinks ${hamburgerOpen ? 'opened' : ''}`}>
              <div className="topbarDropdown">
                <div className="topbarLink">About Us
                  <div className="topbarArrow">
                    <i className="bi bi-chevron-down" />
                  </div>
                </div>

                {/* dropdown content invisible until hovered , make the hamburger close on page switch if its already opened*/}
                <div className="topbarDropContent">
                  <Link className="topbarDropLink" to="/about" onClick={() => setHamburgerOpen(false)}>About</Link>
                  <Link className="topbarDropLink" to="/contact" onClick={() => setHamburgerOpen(false)}>Contact</Link>
                </div>
              </div>
              <button className="topbarLink" onClick={() => {nav('/adopt'); setHamburgerOpen(false)}}>Adopt</button>
              <button className="topbarLink" onClick={() => {nav('/rehome'); setHamburgerOpen(false)}}>Rehome</button>
            </div>
        </div>
    </div>
  );
};

export default Topbar; 