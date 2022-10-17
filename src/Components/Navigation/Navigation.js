import React from 'react'
import "../css/media.css"
import {useState} from 'react'

function Navigation() {
  const [nav,setNav] =useState(false)
  return (
    <div className='nav-container'>
        <div className="logo"><h4>Logo</h4>
        </div>
        <div class="icon nav-icon-5">
    <span></span>
    <span></span>
    <span></span>
  </div>
        <div className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Page</li>
        <li>Contact</li>
        </div>
        <div className="reg-btn">
            <button>Register Now</button>
        </div>
    </div>
  )
}

export default Navigation