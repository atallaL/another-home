//top bar for all pages but home bc home doesnt need the little menu ico

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Topbar.css'
import {Link, useNavigate} from 'react-router-dom'

import logoRed from '../assets/redlogo.png';


const Topbar = () => {

  const nav = useNavigate();

  return (
    <div className="topbarContainer">
        <div className="topbarElements">
            <div className="topbarLogo">
                <Link to="/">
                  <img className="topbarLogoImage" src={logoRed}/>
                </Link>
            </div>
            <div className="topbarLinks">
              <div className="topbarDropdown">
                <div className="topbarLink">About Us
                  <div className="topbarArrow">
                    <i class="bi bi-chevron-down" />
                  </div>
                </div>

                {/* dropdown content invisible until hovered */}
                <div className="topbarDropContent">
                  <Link className="topbarDropLink" to="/about">About</Link>
                  <Link className="topbarDropLink" to="/contact">Contact</Link>
                </div>
              </div>
              <button className="topbarLink" onClick={() => nav('/adopt')}>Adopt</button>
              <button className="topbarLink" onClick={() => nav('/rehome')}>Rehome</button>
            </div>
        </div>
    </div>
  );
};

export default Topbar;