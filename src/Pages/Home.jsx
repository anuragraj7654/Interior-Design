import React from 'react'
import Navbar from "../Components/Navbar"
import Homepage from "../Components/Homepage"
import About from '../Components/About';
import Fourth from '../Components/Fourth';
import AboutUs from '../Components/AboutUs';
import PicGallery from '../Components/PicGallery';
import OurTeam from '../Components/OurTeam';
import ContactUs from '../Components/ContactUs';
import Footer from '../Components/Footer';
import bgimg from '../Images/bgpic.jpg'
import Services from '../Components/Services';





function Home() {
  return (
    <>
    <Navbar/>
      <Homepage pic={bgimg}/>
      <About/>
      <Services/>
      <Fourth/>
      <AboutUs/>
      <PicGallery/>
      <OurTeam/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default Home