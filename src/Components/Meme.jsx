import React from 'react'
import memesData from './memesData'


function Meme() {

  const [memeImage, setMemeImage] = React.useState('')

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
}



  return (
    <main>
        <div className='meme-form'>
            <input className='meme-input' type='text' placeholder='Top Text'></input>
            <input className='meme-input' type='text' placeholder='Bottom Text'></input>
            <button onClick= {getMemeImage} className='meme-button'>Get a new Meme Image 🖼</button>
          </div>
          <img src= {memeImage} className ='meme-image'/>
          
    </main>
  )
}

export default Meme