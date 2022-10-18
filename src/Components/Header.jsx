import React from 'react'
import TrollFace from 'Images/TrollFace.png'

function Header() {
  return (
    <div className='Header'>
        <img>{TrollFace}</img>
        <h1 className='Title'>Meme Generator</h1>
    </div>
  )
}

export default Header