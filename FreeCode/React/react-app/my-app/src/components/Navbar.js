import React from "react";
import Logo from "../images/logo512.png"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={Logo} alt="react-logo"className="react-logo"></img>
            <h3 className="react-facts">ReactFacts</h3>  
            <h4>React Course - Project 1</h4>  
        </nav>
        
    )
}