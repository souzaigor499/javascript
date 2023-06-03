import React from "react";
import Logo from "./images/logo512.png"

export default function Header(){
    return (
        <header>
                <nav className="nav" alt="react-logo">
                    <div className="img-and-logo"><img src={Logo} className="react-logo" alt="react-logo"></img>
                    <h1>ReactFacts</h1></div>
                   <ul className="nav-items">
                        <li>Princing</li>
                        <li>About</li>
                        <li>Contact</li>
                   </ul>
                </nav>
            </header>
    )
}