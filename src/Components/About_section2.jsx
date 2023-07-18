import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
const image1 = require("../Images/about1.jpg")
const image2 = require("../Images/about2.jpg")
const image3 = require("../Images/about3.jpg")
function About_section2() {
  const Data4 = [
    {
      img: image1,
      h3: "Design Team",
    },
    {
      img: image2,
      h3: "Modular Furniture",
    },
    {
      img: image3,
      h3: "Artitecture Drawing",
    },
  ]
  return (
    <div className='PicGallery'>
      <Grid container spacing={4} sx={{ px: 6 }}>
        {Data4.map((items) => {
          return (
            <Grid sm={4} xs={12}>
              <div className='div-class'>
                <h6></h6>
                <img className='image-class' src={items.img} alt="" />
                <h6>INTERIOR</h6>
                <h3>{items.h3}</h3>
                <h3>+</h3>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}
export default About_section2