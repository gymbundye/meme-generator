import React from 'react'
import memesData from './memesData'


function Meme() {

  // const [memeImage, setMemeImage] = React.useState('')
  const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme( prevMeme => ({
      ...prevMeme, 
      randomImage: url
    }))
}



  return (
    <main>
        <div className='meme-form'>
            <input className='meme-input' type='text' placeholder='Top Text'></input>
            <input className='meme-input' type='text' placeholder='Bottom Text'></input>
            <button onClick= {getMemeImage} className='meme-button'>Get a new Meme Image 🖼</button>
          </div>
          <img src= {meme.randomImage} className ='meme-image'/>
          
    </main>
  )
}

export default Meme