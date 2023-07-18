import React from 'react'
import Grid from '@mui/material/Grid';
import "../Styles/style.css"

function AboutUs() {
  const Data=[
    {
      id: "01",
      line2: "Be the Customer",
      para:"Developing deep empathy for our customer's needs, challenges, and dreams is critical to ensuring we do that well. We want to provide the same standard of tools and services to our customers that we would want for ourselves."
    },
    {
      id: "02",
      line2: "Design is not a luxury",
      para:"We believe that great design should be available to everyone, and we are relentlessin our persuit of great design in everything we do."
    },
    {
      id: "03",
      line2: "Be the Ideal",
      para:"We seek to shape the future of our industry by conceiving of and building game changing product. To do this, we take bets on big ideas, while also recognizing that pursuit of perfection is a process that requires constant iteration."
    },
    {
      id: "04",
      line2: "Learn Fast, act Fast",
      para:"We believe that pursuing the fastest path to learning and having a healthy bias to action are keys to our success. We seek to do both whenever possible."
    },
    {
      id: "05",
      line2: "Protect Creatively",
      para:"Ideas can come from anyone or anywhere, but they are fragile and require space to develop and grow. We believe the creative process is critical to our success, and we seek to protect it as we develop new directions for our product and company"
    },
    {
      id: "06",
      line2: "Simplify",
      para:""
    },   
  ]
  return (
    <div className='AboutUs'>
    <Grid container spacing={2} sx={{ px:5 }}>
    <Grid md={4} sm={12} sx={{ justifyContent: 'center' }}>
    <div className="about-text">Our Values</div>
    </Grid>
    <Grid md={8} sm={12}>
      <Grid container spacing={0} sx={{ px: 1 }}>
        {Data.map((items)=>{
          return(
            <Grid sm={6} xs={12}>
      <div className='data-about'>
        <h4>{items.id}</h4>
        <h2>{items.line2}</h2>
        <p>{items.para}</p>
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

export default AboutUs