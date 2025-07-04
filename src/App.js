import './App.css';
import './index.css';

//pages
import Home from './pages/home/Home';
import Adopt from './pages/adopt/Adopt';
import Rehome from './pages/rehome/Rehome';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import AdoptAnimal from './pages/animal/AdoptAnimal';
import AdoptConfirm from './pages/adopt-confirm/AdoptConfirm';
import RehomeConfirm from './pages/rehome-confirm/RehomeConfirm';

import React, {useState, useEffect, useRef} from 'react';
import {HashRouter as Router, Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';

function App() {

  //states
  const [loaded, setLoaded] = useState(false);

  //for page fade loading
  const loc = useLocation();

  //right as page loads up, do this animation thingy
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3500);
  });



  return (
    <>
      {/* website loadup */}
      {!loaded && 
        <>
          <div className="startupScreen" />
          <div className="dogWalkAnimation" />
        </>
      }
      
      {/* to make bars stick to top and bottom */}
      <div className="appWrap">
        <Topbar/>
        {/* keyed component allows for reframing on page change */}
        <div className="pageContainer" key={loc.pathname}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/adopt" element={<Adopt/>}/>
              <Route path="/rehome" element={<Rehome/>}/>
              <Route path="/adopt/:id" element={<AdoptAnimal />} />
              <Route path="/adopt/confirm" element={<AdoptConfirm />} />
              <Route path="/rehome/confirm" element={<RehomeConfirm />} />
            </Routes>
          </div>
        </div>

        <Bottombar/>
      </div>
    </>
  );
}

export default App;
