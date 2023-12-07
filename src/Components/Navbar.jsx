import React from 'react'
import logo from "../assets/ccc logo.svg"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='ccc-logo'><img src={logo}></img></div>
        <div className='link'><Link to="/">Home</Link> </div>
        <div className='link'><Link to="/about">About</Link></div>
        <div className='link'><Link to="/faculty">Faculty</Link></div>
        <div className='link'><Link to="/register">Register</Link></div>
        
    </div>
  )
}

export default Navbar
