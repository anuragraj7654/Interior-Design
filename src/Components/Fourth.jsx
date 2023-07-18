import React from 'react'
import image from "../Images/home-1.jpg"
import "../Styles/style.css"
import Grid from '@mui/material/Unstable_Grid2';
import { borders } from '@mui/system';

function Fourth() {
  return (
    <div className='fourth'>
    <img className='image-home' src={image} alt="" />
    <Grid container spacing={0} sx={{ px: 0 }}>
  <Grid sm={6} xs={12}>
    <div className='hover'>
    <div className='text-color'>ARCHITECTURE</div>
    <div className='text-color2'>URBAN</div>
    </div>
  </Grid>
  <Grid sm={6} xs={12}>
    <div className='hover'>
    <div className='text-color'>INTERIOR</div>
    <div className='text-color2'>HOME</div>
    </div>
  </Grid>
</Grid>

    </div>
  )
}

export default Fourth