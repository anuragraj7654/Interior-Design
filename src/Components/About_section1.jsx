import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
function About_section1() {
    const Data3 = [
        {
            h2: "Residential",
            p: "Explore the best new residential interior design, ranging from tiny private homes to big apartment blocks."
        },
        {
            h2: "Hospitality",
            p: "Interior design in hospitality centers primarily on service industries including hotels, restaurants, cafés, bars, etc"
        },
        {
            h2: "Commercial",
            p: "Commercial interior design pertains to the interior design of different commercial spaces, such as offices, lobbies, restaurants, etc."
        }
    ]
    return (
        <div className='About_section1'>
            <Grid container spacing={0} sx={{ px: 0 }}>
                <Grid xs={12} sm={6}>
                    <div className="about-text1">Offering an array of services in the fields of architecture & interior design.</div>
                </Grid>
                <Grid xs={12} sm={6}>
                    <Grid container spacing={2} sx={{ px: 5 }}>
                        {Data3.map((items) => {
                            return (
                                <Grid md={6} sm={12}>
                                    <div className='aboutpage-content'>
                                        <img src="" alt="" />
                                        <h2>{items.h2}</h2>
                                        <p>{items.p}</p>
                                    </div>
                                </Grid>
                            )})}
                    </Grid>
                </Grid>
            </Grid>
            <p className='para'>LEARN MORE ABOUT US +</p>
        </div>
    )
}

export default About_section1