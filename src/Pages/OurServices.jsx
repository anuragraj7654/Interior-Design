import React from 'react'
import Navbar from "../Components/Navbar"
import PicGallery from '../Components/PicGallery';
import HeaderImage from '../Components/HeaderImage'
import Services from '../Components/Services';
import Fourth from '../Components/Fourth';
import Footer from '../Components/Footer';
import serviceimg from "../Images/servicebg.jpg"
function OurServices() {
  return (
    <>
    <Navbar/>
    <HeaderImage h="Our Services" img={serviceimg}/>
    <PicGallery/>
    <Services text="Dreaming of breath taking designs or musing of glamorous home interiors? Everything can be easily attainable under the guidance of our revolutionary designers"/>
    <Fourth/>
    <Footer/>
    </>
  )
}

export default OurServices