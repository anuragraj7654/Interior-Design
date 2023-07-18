import React, { useCallback } from 'react'
import "../Styles/style.css"
import image from "../Images/Screenshot 2023-06-30 110743.jpg"
import image2 from "../Images/dropdown.jpg"
import { Link, Navigate } from 'react-router-dom'
function Navbar() {
  const handleClick = useCallback(() => {
    const element = document.getElementById('nav-bar');
    element.style.display = 'block';
  }, []);
  return (
    <>
    <div className='navbar'>
      <div className='logo-image'><a href="">
        <img src={image} alt="" /></a>
      </div>
      <div className='drop-none'>
        <ul className='navbar-list'>
        <li><Link to='/' className='links'>Home</Link></li>
        <li><Link to='/about' className='links'>About</Link></li>
        <li><Link to='/services' className='links'>Services</Link></li>
        <li><Link to='/contact' className='links'>Contact</Link></li>
          
        </ul>
      </div>
      <div className='logo-image2'><a href="">
        <button onClick={handleClick}> <img src={image2} alt="" /></button>     
      </a>
      </div>
    </div>
    <div className='navbar-dropdown'>
      <h2 className='dropdown-list'><Link to='/' className='links'>Home</Link></h2>
      <h2 className='dropdown-list'><Link to='/about' className='links'>About</Link></h2>
      <h2 className='dropdown-list'><Link to='/services' className='links'>Services</Link></h2>
      <h2 className='dropdown-list'><Link to='/contact' className='links'>Contact</Link></h2>
    </div>
    </>
  )
}

export default Navbar