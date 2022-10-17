import React from 'react'
import '../css/style.css'
import Left from './Left'
import Right from './Right'
import "../css/media.css"

function Hero() {
  return (
    <div className='hero-section'>
     <Left />
     <Right />
    </div>
  )
}

export default Hero
