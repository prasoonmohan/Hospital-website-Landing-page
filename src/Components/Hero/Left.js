import React from 'react'
import Image from '../..//Images/Nurse.png'
import '../css/style.css'
import group from '../../Images/group.png'


function Left() {
  return (
    <>
    <div className='left-container'>
      <img src={Image} alt="" />
    </div>
    <div className="overlapping">
        <div className="box1">
            <div className="icon">
            <img src={group} alt="" />
            </div>
            <div className="text">
                <h4>1540+</h4>
                <p>Active customers</p>
            </div>
        </div>
        <div className="box2">
            <p className='first'>✔ Get 20% off on every <span>1st month</span> </p>
            <p className='second'>✔ Expert Doctors</p>
        </div>
        <div className="dot-1"></div>
        <div className="dot-2"></div>
    </div>
    </>
  )
}

export default Left
