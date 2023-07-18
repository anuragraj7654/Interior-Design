import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"
const person1 = require("../Images/person1.jpg")
const person2 = require("../Images/person2.jpg")
const person3 = require("../Images/person3.jpg")
const person4 = require("../Images/person4.jpg")
const person5 = require("../Images/person5.jpg")
function OurTeam() {
  const Data2=[
    {
      dsg:"FOUNDER",
      img: person1,
      name: "Richa Mishra"
    },
    {
      dsg:"ARCHITECT",
      img: person2,
      name: "Avinash Singh"
    },
    {
      dsg:"HEAD ARCHITECT",
      img: person3,
      name: "Aman Rai"
    },
    {
      dsg:"DESIGNER",
      img: person4,
      name: "Anshuman"
    },
    {
      dsg:"COORDINATOR",
      img: person5,
      name: "Nisha Singh"
    },
  ]
    return (
        <div className='AboutUs'>
        <Grid container spacing={0} sx={{ px:0 }}>
        <Grid xs={12} sm={4}  sx={{ justifyContent: 'center' }}>
        <div className="about-text">Our Team</div>
        </Grid>
        <Grid xs={12} sm={8}>
          <Grid container spacing={0} sx={{ px: 1 }}>
            {Data2.map((items)=>{
              return(
          <Grid xs={12} sm={6} md={4}>
          <div className='data-about'>
            <h5>{items.dsg}</h5>
            <img className='person-class' src={items.img} alt="" />
            <h2>{items.name}</h2>
          </div>
          </Grid>
              )
            })}          
          </Grid>
        </Grid>
        </Grid>
        </div>
      )
}

export default OurTeam