import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
const image1 = require("../Images/home11.jpg");
const image2 = require("../Images/home12.jpg")
const image3 = require("../Images/home13.jpg")
const image4 = require("../Images/home14.jpg")
function PicGallery() {
  const Data1 = [
    {
      id: "01",
      img: image1,
      h6: "ARCHITECTURE",
      h3: "Urban Design",
    },
    {
      id: "02",
      img: image2,
      h6: "KITCHEN",
      h3: "Creamy kitchen",
    },
    {
      id: "03",
      img: image3,
      h6: "HOME",
      h3: "Wood stairs",
    },
    {
      id: "04",
      img: image4,
      h6: "DECOR",
      h3: "Green Vibes",
    }
  ]
  return (
    <div className='PicGallery'>
      <Grid container spacing={0} sx={{ px: 0 }}>
        {Data1.map((items) => {
          return (
            <Grid md={3} sm={6} xs={12}>
              <div className='div-class'>
                <h6>{items.id}</h6>
                <img className='image-class' src={items.img} alt="" />
                <h6>{items.h6}</h6>
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
export default PicGallery