import React from 'react'
import Design from './Design'
import "../Styles/style.css"
import { textAlign } from '@mui/system'

function Services(p) {
  return (
    <div className='servicess'>
      <h3 className="service_quote">{p.text}</h3>
         <h6>Explore by Categories</h6>
         <Design heading="VILLA DESIGN"></Design>
         <Design heading="INTERIOR STYLE"></Design>
         <Design heading="HOUSE DESIGN"></Design>
         <Design heading="MODERN HOUSE"></Design>
         <Design heading="COLOR SCHEMES"></Design>
         <Design heading="OUTDOOR DESIGN"></Design>
    </div>
  )
}

export default Services