import React from 'react'

function Meme() {
  return (
    <main>
        <form className='meme-form'>
            <input  className='meme-input' type='text'  placeholder='Top Text'></input>
            <input className='meme-input' type='text' placeholder='Bottom Text'></input>
            <button className='meme-button'>Get a new Meme Image 🖼</button>
        </form>
    </main>
  )
}

export default Meme