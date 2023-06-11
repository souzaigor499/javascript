import React from "react";
// import Logo from "../images/Vector.png"


export default function Navbar(props){
    return (
        <nav className="navbar">  
            <img alt='AirBnb-logo' src={`../images/${props.logo}`}></img>

        </nav>
    )
}