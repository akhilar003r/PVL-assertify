import { useState } from 'react'

import './Nav.css'
import reactLogo from '../../assets/react.svg'
import {Link, NavLink} from 'react-router-dom'



function Nav() {
     const [page,SetPage]=useState("Home");
    const fun=(x)=>{
        SetPage(x)
    };
    

  return (
    <>
    <div className='navbar'>
        <div className='navbarContainer'>
    <img className='logo' src="https://cdn1.iconfinder.com/data/icons/unigrid-religion/60/008_011_religion_mandala_buddhism_indian-256.png" alt="" />
    <div className='text'>
        <p className='toptext'>CAROL SOLVAY</p>
        <p className='bottomtext'>Minset mastery Mentor</p>
    </div>
        <div className='rightSideComp'>
            <p href="home" >Home</p>
            <p href="about" >About</p>
            <p href="contact" >Contact</p>
        </div>
        </div>
    </div>
    </>
  )
}

export default Nav
