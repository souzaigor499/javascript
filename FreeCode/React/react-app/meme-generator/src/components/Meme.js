import React from "react"
import dataMeme from "../dataMeme"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allImageMemes, setAllImageMeme] = React.useState(dataMeme)

     function getMeme(){
        const memesArray = allImageMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomNumber].url)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({...meme, randomImage: url})
        )
     } 
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button onClick={getMeme} 
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img alt='' src={meme.randomImage} className="meme" />
        </main>
    )
}