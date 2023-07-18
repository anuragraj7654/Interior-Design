import React from 'react'
import "../Styles/style.css"
import Grid from '@mui/material/Grid';
import Established from './Established';
import imageabt4 from "../Images/abt4.jpg"
function About_section4() {
    return (
        <div className='About_section4'>
            <Grid container spacing={1} sx={{ px: 0 }}>
                <Grid sm={3} xs={12}>
                    <div className='abt4'>Well Established</div>
                </Grid>
                <Grid sm={9} xs={12}>
                 <div> <Established/>      </div>             
                </Grid>
            </Grid>
            <div className='imageabt4'>

            <img width='100%' src={imageabt4} alt="" />
            </div>

        </div>
    )
}

export default About_section4