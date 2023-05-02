import React from 'react'
import './Monitor.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import { FaLocationArrow } from 'react-icons/fa';

import ImageLeft from '../../images/alien.png'
import Banner1 from '../../images/Banner_1.png'
import PlanetSpace2 from '../../images/planet2.gif'

const Monitor = () => {
  AOS.init();
  return (
    <div>
        
        <div data-aos="zoom-in" className='Monitor'>
          {/* <div className='PrincipalBanner'>
            <img src={Banner1}></img>
          </div> */}

          <div className='Box'>
            <div className='TitleSection'>
              <h2>S.T.A.R. Agency</h2>
              <h3>Space Tracking And Recovery (STAR)</h3>
            </div>
            <div className='InformationSection'>
              <div className='InformationLeft'>
                <p>So, you've decided to become a bounty hunter? Well, rookie, you've come to the right place. As you may know, the SUI Galaxy is a dangerous place and is in dire need of protection. That's where we, the Space Tracking And Recovery (STAR) agents, come in. As the name implies, we track down the most dangerous and harmful individuals roaming space and put them away, sometimes even for their own good. You'll see what I'm talking about soon.</p>
                {/* <p>To become a STAR agent, you'll need to be cunning, brave, and a bit crazy, but as long as you get results, you'll be okay. Our dear galaxy houses a variety of species coexisting and sharing precious resources. Of course, this creates opportunities for bandits, murderers, pirates, and all sorts of unsavory characters to do bad things to common folk all around. As a local, you may not know all the races roaming around, and you'll need to know their strengths and weaknesses to be an effective agent. So let's talk about prey, shall we?</p> */}
              </div>
              <div className='ImageRight'>
              <img src={ImageLeft}></img>
              </div>
            </div>

          </div>

      <div className='InfoSocial'>
          <a className='buttontwitter' href='https://twitter.com/sui_alienz' target='_blank'><FaTwitter size='2rem'/></a>
          <a className='buttondiscord' href='https://discord.gg/alienz' target='_blank'><SiDiscord size='2rem'/></a>
          <a className='buttonlaunchnft' href='LinkMyLaunch' target='_blank'><FaLocationArrow size='1.7rem'/></a>
          
        </div>
    </div>
    <div className='PlanetSpace2'>
        <img src={PlanetSpace2}></img>
        </div>

    </div>
  )
}

export default Monitor