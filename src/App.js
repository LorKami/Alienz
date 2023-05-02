import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Spritesheet from 'react-responsive-spritesheet';

import Home from "./pages/Home";
import Error from "./pages/Error";
import '../src/App.css'

import Logo from "./images/logo.png"

import spriteImage  from './images/sprite.png'


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    // }, 9000);
    },3000);
  }, []);
  return (
    <>
    {loading ? (
      
      <div className="LoadingScreen">
        <div className="Preloader">
        {/* <img className="Motto" src={Logo} /> */}

        <div className='SpriteSection'>
    <div className="sprite">
      <Spritesheet 
        image={spriteImage}
        widthFrame={500}
        heightFrame={500}
        steps={50}
        fps={9}
        autoplay={true}
        loop={true}
        backgroundSize="500px 500px"
      />
      </div>
      </div>

        </div>
      </div>
    ) : (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      </div>
 )}
 </>
 );
}

export default App;
