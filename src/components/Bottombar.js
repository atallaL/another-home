//top bar for all pages but home bc home doesnt need the little menu ico

import React, {useState} from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Bottombar.css'
import {Link} from 'react-router-dom'

const Bottombar = () => {

  return (
    <div className="bottombarContainer">
        <div className="bottombarText">
            Designed by <Link target="_blank" to='https://atallal.github.io/portfolio-website/'>Leonardo Atalla</Link>
        </div>
    </div>
  );
};

export default Bottombar; 