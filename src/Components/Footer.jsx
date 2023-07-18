import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
import { Link, Navigate } from 'react-router-dom'



function Footer() {
    return (
        <div className='Footer'>
            <Grid container spacing={0} sx={{ px: 0 }}>
                <Grid xs={12} sm={6}>
                <div className='first-half'>
                        <h3>Niemeyer Center</h3>
                        <p>We are a modern architectural bureau with a professional team of architects</p>
                        <h1>construction</h1>
                    </div>
                </Grid>
                <Grid xs={12} sm={6}>
                    <div class="first-half">
                    <Grid container spacing={5} sx={{ px: 2 }}>
                        <Grid xs={4}>
                            <div className='second-ele'>
                                <h4>Pages</h4>
                                <h6><Link to='/' className='links'>Home</Link></h6>
                                <h6><Link to='/about' className='links'>About</Link></h6>
                                <h6><Link to='/services' className='links'>Services</Link></h6>
                                <h6><Link to='/contact' className='links'>Contact</Link></h6>
                            </div>
                        </Grid>
                        <Grid xs={4}>
                            <div className='second-ele'>
                                <h4>Design New York</h4>
                                <h6>Address</h6>
                                <h6>Contact No1</h6>
                            </div>
                        </Grid>
                        <Grid xs={4}>
                            <div className='second-ele'>
                                <h4>Follow us</h4>
                                <h6>Facebook</h6>
                                <h6>Twitter</h6>
                                <h6>Instagram</h6>
                            </div>
                        </Grid>
                    </Grid>
                    </div>
                </Grid>
                </Grid>
                <div className='footerlast'>
                    <h5 className='lastone'>© 2023 QODE INTERACTIVE ALL RIGHTS RESERVED</h5>
                </div>
        </div>
    )
}

export default Footer