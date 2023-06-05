import React from "react";
import Twitter from '../images/Twitter Icon.png'
import Facebook from '../images/Facebook Icon.png'
import Instagram from '../images/Instagram Icon.png'
import Github from '../images/GitHub Icon.png'

export default function Footer(){
    return (
        <footer className="footer">
            <img alt='Twitter-logo' src={Twitter}></img>
            <img alt='Facebook-logo' src={Facebook}></img>
            <img alt='Instagram-logo' src={Instagram}></img>
            <img alt='Github-logo' src={Github}></img>
        </footer>
    )
}