import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
const galleryimage1 = require("../Images/abtgallery1.jpg")
const galleryimage2 = require("../Images/abtgallery2.jpg")
const galleryimage3 = require("../Images/abtgallery3.jpg")
const galleryimage4 = require("../Images/abtgallery4.jpg")
const galleryimage5 = require("../Images/abtgallery5.jpg")
const galleryimage6 = require("../Images/abtgallery6.jpg")
const galleryimage7 = require("../Images/abtgallery7.jpg")
const galleryimage8 = require("../Images/abtgallery8.jpg")

function AboutGallery() {
    const Data=[galleryimage1,galleryimage2,galleryimage3,galleryimage4,galleryimage5,galleryimage6,galleryimage7,galleryimage8]
    return (
        <div className='AboutGallery'>
            <Grid container spacing={0} sx={{ px: 3 }}>
                {Data.map((items)=>{
                    return(
                <Grid md={3} sm={6} xs={12}>
                    <div className='abtgallery'>
                        <img width='100%' src={items} alt="" />
                    </div>
                </Grid>
                    )
                })}                
            </Grid>
        </div>
    )
}
export default AboutGallery
