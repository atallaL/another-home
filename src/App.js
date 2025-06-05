import './App.css';
import './index.css';

//pages
import Home from './pages/home/Home';
import Adopt from './pages/adopt/Adopt';
import Rehome from './pages/rehome/Rehome'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

import React, {useState, useEffect, useRef} from 'react';
import {HashRouter as Router, Routes, Route, useLocation, useNavigate} from 'react-router-dom';

import Topbar from './components/Topbar'

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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
