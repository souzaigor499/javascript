import React from "react";
import Profile from '../images/ft-igor.jpg'
import Linkedin from "../images/linkedin.png"
import Email from '../images/Mail.png'

export default function Info(){
    return (
        <div  className='profile'>
            <img alt='profile-img' src={Profile} className="profile-img"></img>
            <h1>Igor Souza</h1>
            <h2>Desenvolvedor Fronted</h2>
            <a href="https://github.com/souzaigor499">github.io/souzaigor499</a>
            <div className="buttons">
                <button className="email">
                    <img alt="email-logo" src={Email}></img> Email
                </button>
                <button className="linkedin">
                    <img alt="Linkedin-logo"  src={Linkedin}></img> Linkedin
                </button>
            </div>
        </div>
    )
}