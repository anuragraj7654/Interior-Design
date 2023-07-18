import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Container } from '@mui/material';
import Established from './Established';
import "../Styles/style.css"
import img1 from "../Images/aboutimg1.jpg"
import img2 from "../Images/aboutimg2.jpg"

function About() {
  return (
    <div className='about'>
    <Container>
        <h1 className='about-heading'>Well-established and experienced in many fields.</h1>
    </Container>
    <Established></Established>
    <Grid container spacing={0} sx={{ px: 0 }}>
  <Grid sm={8} xs={12}>
    <div className='image_abt'>
    <img className='about-img1' src={img1} alt="" />
    </div>
  </Grid>
  <Grid sm={4} xs={12}>
    <div className='image_abt'>
    <img className='about-img2' src={img2} alt="" />
    <div className="img2-footer">
        <Box sx={{ m: 0 }}>INTERIOR</Box>
        <Box sx={{ m: 0 }}>3D House Render</Box>
        <Box sx={{ m: 0 }}>+</Box>
        
    </div>
    </div>
  </Grid>
</Grid>
    </div>
  )
}

export default About