import React, { useEffect, useState, useRef  } from 'react';
import { Howl } from 'howler';
import { animateScroll } from "react-scroll";
import '../Header/Header.css'

import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import { MdMusicOff } from 'react-icons/md';
import { IoMdMusicalNote } from 'react-icons/io';
import { TbUfo } from "react-icons/tb";

function handleNavClick(section) {
  animateScroll.scrollTo(section);
}

  // const Header = () => {

  function Header () {

    ///// --------------------- Scroll Home --------------------- /////

    const handleButtonClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    ///// --------------------- Scroll Home --------------------- /////



    ///// --------------------- Sticky --------------------- /////

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    ///// --------------------- Music --------------------- /////
    
    const [isIconActive, setIsIconActive] = useState(false);
    const [sound, setSound] = useState(null);
  
    const handleIconClick = () => {
      if (!isIconActive) {
        const newSound = new Howl({
          src: ['alienz_master.mp3'],
          volume: 0.3,
          loop: true
        });
        newSound.play();
        setSound(newSound);
      } else {
        if (sound) {
          sound.stop();
          setSound(null);
        }
      }
      setIsIconActive(!isIconActive);
    }

    ///// --------------------- Music --------------------- /////

  return (
    <div>
        
    <div className={isScrolled ? 'PrincipalHeader sticky' : 'PrincipalHeader'}>
        <div className='HeaderSection'>
        <a className='ButtonHome' onClick={handleButtonClick}><TbUfo size='1.5rem'/></a>
            {/* <a><p>Collection</p></a>
            <a><p>Project</p></a> */}
            <a className='ButtonTwitter' href='https://twitter.com/sui_alienz' target="_blank"><FaTwitter size='1.5rem'/></a>
            <a className='ButtonDiscord' href='https://discord.gg/alienz' target="_blank"><SiDiscord size='1.5rem'/></a>
            <p className='animation' onClick={handleIconClick}>{isIconActive  ? <IoMdMusicalNote className='MusicOff' size='1.5rem'/> : <MdMusicOff size='1.5rem'/>}</p>
        </div>
    </div>

    </div>
  );
}

export default Header;