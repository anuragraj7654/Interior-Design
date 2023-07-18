import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import "../Styles/style.css"

function Established() {
  return (
    <div className='established'>
      <Grid container spacing={0} sx={{ px: 0 }}>
        <Grid xs={12} sm={6} md={4} >
          <div className="about-content1">
            <h2>32K</h2>
            <h4>Realized projects</h4>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <div className="about-content1">
            <h2>16+</h2>
            <h4>Years of experience</h4>
          </div>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <div className="about-content1">
            <h2>64</h2>
            <h4>Team members</h4>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Established