import React, { useRef } from 'react'

import Header from "../components/Header"
import Monitor from "../components/Monitor"
import Footer from '../components/Footer'

import SecondSection from '../components/SecondSection';
import SectionCollection from '../components/SectionCollection';

function Home() {

  return (
    <div>
        <Header />
        <Monitor />
        <SecondSection />
        <SectionCollection />
        <Footer />
        </div>
  )
}

export default Home