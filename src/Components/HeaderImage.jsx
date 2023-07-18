import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"

const HeaderImage = (props) => {
  return (
    <>
      <div className='Homedata1' style={{backgroundImage:`url(${props.img})`}}>
        <Grid container spacing={0} sx={{ px: 0 }}>
          <Grid xs={6}>
            <h1 className='header-data'>{props.h}</h1>
            <h2></h2>
          </Grid>
          <Grid xs={6}>

          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default HeaderImage