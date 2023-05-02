import React, { useRef } from 'react';
import '../SectionCollection/SectionCollections.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link } from 'react-scroll';

import Example1 from '../../images/previews/example1.png'
import Example2 from '../../images/previews/example2.png'
import Example3 from '../../images/previews/example3.png'
import Example4 from '../../images/previews/example4.png'
import Example5 from '../../images/previews/example5.png'
import Example6 from '../../images/previews/example6.png'
import Example7 from '../../images/previews/example7.png'
import Example8 from '../../images/previews/example8.png'
import Example9 from '../../images/previews/example9.png'
import Example10 from '../../images/previews/example10.png'
import Example11 from '../../images/previews/example11.png'
import Example12 from '../../images/previews/example12.png'

import PlanetSpace1 from '../../images/planet1.gif'


// const SectionCollection = () => {

function SectionCollection() {
  AOS.init();
  return (
    <div>
        
    <div className='SectionCollection' data-aos="zoom-in">
        <div className='SectionBoxes'>
            <div className='BoxLeft'>
                <h2>ROOKIES</h2>
                <p>To become a STAR agent, you'll need to be cunning, brave, and a bit crazy, but as long as you get results, you'll be okay. Our dear galaxy houses a variety of species coexisting and sharing precious resources.</p>
                <p>Of course, this creates opportunities for bandits, murderers, pirates, and all sorts of unsavory characters to do bad things to common folk all around.</p>
                <p>As a local, you may not know all the races roaming around, and you'll need to know their strengths and weaknesses to be an effective agent. So let's talk about prey, shall we?</p>
            </div>
            <div className='BoxRight'>
                <img src={Example1}></img>
                <img src={Example2}></img>
                <img src={Example3}></img>
                <img src={Example4}></img>
                <img src={Example5}></img>
                <img src={Example6}></img>
                <img src={Example7}></img>
                <img src={Example8}></img>
                <img src={Example9}></img>
                <img src={Example10}></img>
                <img src={Example11}></img>
                <img src={Example12}></img>
            </div>
        </div>
        <div className='PlanetSpace'>
        <img src={PlanetSpace1}></img>
        </div>
    </div>

    </div>
  )
}

export default SectionCollection