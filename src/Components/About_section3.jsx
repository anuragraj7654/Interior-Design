import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"

import image22 from "../Images/about3pic.jpg"
function About_section3() {
  return (
    <div className='About_section3'>
        <Grid container spacing={3} sx={{ px: 4 }}>
        <Grid sm={7} xs={12}>   
          <div className='abt3image'>
            <img className="abt3img" src={image22} alt="" />
          </div>
        </Grid>
        <Grid sm={5} xs={12}>   
          <div className="ab3">
            <p>01</p>
            <h2>Residential</h2>
          </div>
          <div className="ab3">
            <p>02</p>
            <h2>Commercial</h2>
          </div>
          <div className="ab3">
            <p>03</p>
            <h2>Multipurpose</h2>
          </div>
          <div className="ab3">
            <p>04</p>
            <h2>Hospitality</h2>
          </div>
        </Grid>
        </Grid>
    </div>
  )
}

export default About_section3