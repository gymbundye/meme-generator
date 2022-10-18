import React from 'react'
import TrollFace from './Images/Troll-Face.png'

function Header() {
  return (
    <div className='Header'>
        
        <img src= {TrollFace} alt="your mama!"  className='TrollFace'/>

        <h1 className='Title'>Meme Generator</h1>

        <p className='header-text'>React Course-Project 3</p>
    </div>
  )
}

export default Header