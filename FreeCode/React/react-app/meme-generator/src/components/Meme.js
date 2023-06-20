import React from "react"
import dataMeme from "../dataMeme"

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState('')

     function getMeme(){
        const memesArray = dataMeme.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomNumber].url)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
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
            <img alt='' src={memeImage} className="meme" />
        </main>
    )
}