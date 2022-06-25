import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
        <Link className='footer-link' to="/projects">Projects</Link>
        <Link className='footer-link' to="/about">About</Link>
        <Link className='footer-link' to="/Contact">Contact me</Link>
    </div>
  )
}

export default Footer