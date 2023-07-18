import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
const Homepage = (props) => {
  return (
    <>
      <div className='Homepage'>
        <img className='bg-image' src={props.pic} alt="" />
        <div className='Homedata'>
          <Grid container spacing={0} sx={{ px: 0 }}>
            <Grid xs={6}>

            </Grid>
            <Grid xs={6}>
              <h1 className='homepage-head'>Creating Spaces for lifetime</h1>
              <h2></h2>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  )
}
export default Homepage