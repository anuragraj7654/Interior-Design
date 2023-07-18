import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
import { Link, Navigate } from 'react-router-dom'
import img1 from "../Images/Clients-img-01.png"
import img2 from "../Images/Clients-img-02.png"
import img3 from "../Images/Clients-img-03.png"
import img4 from "../Images/Clients-img-04.png"
import img5 from "../Images/Clients-img-05.png"
import img6 from "../Images/Clients-img-06.png"
function ContactUs() {
  return (
    <div className='ContactUs'>
    <Grid container spacing={0} sx={{ px:0 }}>
    <Grid xs={12} sm={12} md={6} sx={{ justifyContent: 'center' }}>
    <Link to='/about' className='links'>      
    <div className="bg-image1">
    <div className='home-hover'><h2 className='center'>About Us</h2></div>      
    </div>   
    </Link>
    </Grid>
    <Grid xs={12} sm={12} md={6} sx={{ justifyContent: 'center' }}>
    <Link to='/contact' className="links bg-image2" >      
    <div className="bg-image2">
    <div className='home-hover'><h2 className='center'>Contact Us</h2></div>      
    </div>
    </Link>
    </Grid>
    </Grid>
    <Grid container spacing={0} sx={{ px:0 }}>
    <Grid  sm={2} xs={4} sx={{ px:0.25 }}>
    <div><img className='png-image' src={img1} alt="" /></div>
    </Grid>
    <Grid  sm={2} xs={4} sx={{ px:0.25 }}>
    <div><img className='png-image' src={img5} alt="" /></div>
    </Grid>
    <Grid  sm={2} xs={4} sx={{ px:0.25 }}>
    <div><img className='png-image' src={img6} alt="" /></div>
    </Grid>
    <Grid  sm={2} xs={4} sx={{ px:0.25 }}>
    <div><img className='png-image' src={img2} alt="" /></div>
    </Grid>
    <Grid  sm={2} xs={4} sx={{ px:0.25 }}>
    <div><img className='png-image' src={img3} alt="" /></div>
    </Grid>
    <Grid  sm={2} xs={4} sx={{ px:0.25 }}>
    <div><img className='png-image' src={img4} alt="" /></div>
    </Grid>
    </Grid>
    </div>
  )
}

export default ContactUs