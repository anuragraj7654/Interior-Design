import React from 'react'
import Navbar from "../Components/Navbar"
// import bgimg from '../Images/bgpic.jpg'
import Homepage from '../Components/Homepage'
import About_section1 from '../Components/About_section1'
import About_section2 from '../Components/About_section2'
import About_section3 from '../Components/About_section3'
import About_section4 from '../Components/About_section4'
import AboutGallery from '../Components/AboutGallery'
import Footer from '../Components/Footer'
import HeaderImage from '../Components/HeaderImage'
import abt_img from "../Images/abtbnr.jpg"

function About() {
  return (
    <>
    <Navbar/>
    <HeaderImage h="About Us" img={abt_img} />
    <About_section1/>
    <About_section2/>
    <About_section3/>
    <About_section4/>
    <AboutGallery/>
    <Footer/>
    </>
  )
}

export default About