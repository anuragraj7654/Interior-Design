import React from 'react'
import Navbar from "../Components/Navbar"
import ContactPage from '../Components/ContactPage'
import HeaderImage from '../Components/HeaderImage'
import Footer from '../Components/Footer';
import contact1 from "../Images/contact1.jpg"

function Contact() {
  return (
    <>
    <Navbar/>
    <HeaderImage h="Contact Us" img={contact1}/>
    <ContactPage/>
    <Footer/>
    </>
  )
}

export default Contact