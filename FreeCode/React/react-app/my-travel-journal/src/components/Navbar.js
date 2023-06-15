import React from "react";

export default function Navbar(props){
    return (
        <nav className="navbar">  
            <img alt='journal-logo' src={`../images/${props.src}`}></img>
            <p>my travel journal.</p>
        </nav>
    )
}
