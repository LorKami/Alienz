import React, { useState } from 'react';
import '../SecondSection/SecondSection.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'
import card5 from '../../images/card5.png'
import card6 from '../../images/card6.png'

import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from "react-icons/fa";

  const SecondSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [card1, card2, card3, card4, card5, card6];
  
    const handleLeftArrowClick = () => {
      setCurrentImage((currentImage - 1 + images.length) % images.length);
    };
  
    const handleRightArrowClick = () => {
      setCurrentImage((currentImage + 1) % images.length);
    };

    AOS.init();
  return (
    <div>
      
    {/* <div className='Section' ref={secondSectionRef}>
      <div className='backimage'>
        <img src={BackInfo}></img>
        <div className='SectionInfo'>
        <p>Enter leaders, myths and legends, whose reign has set out to destroy the trust of governments, political figures and good actors in the crypto universe.
              Luckily, there is a group of Avengers with a key set of skills intent on rebuilding and regaining the trust of a community that once flourished with daily mints....</p>
        </div>
      </div>
    </div> */}

<div className='GallerySection' data-aos="zoom-in">
      <div className='GalleryBox'>
        <a className='Arrows Left' onClick={handleLeftArrowClick}><FaRegArrowAltCircleLeft size='4.0rem'/></a>
        <img className='ImagesGallery' src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        <a className='Arrows' onClick={handleRightArrowClick}><FaRegArrowAltCircleRight size='4.0rem'/></a>
      </div>
    </div>

    </div>
  )
}

export default SecondSection