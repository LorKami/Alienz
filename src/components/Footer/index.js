import { useState } from 'react';
import Spritesheet from 'react-responsive-spritesheet';

import '../Footer/Footer.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import FooterImage from '../../images/footerimage.png'
import spriteImage  from '../../images/sprite.png'

const Footer = () => {
  AOS.init();
  return (
    <div>
        

    <div className='FooterSection' data-aos="zoom-in">
            <div className='FooterText'>
                <p>Alienz ®</p>
                <p>2023</p>
            </div>
        </div>

    </div>
  )
}

export default Footer