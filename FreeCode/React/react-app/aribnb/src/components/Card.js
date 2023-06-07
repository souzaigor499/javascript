import React from "react";
import star from '../images/Star 1.png'
import kate from '../images/image 12.png'

export default function Card(){
    return (
        <div className="main-content">
            <div className="content">
                <img alt="" src={kate}></img>
                <span className="rating">
                <p className="p-rating"> <img alt="" src={star}></img> 5.0</p>
                <p className="country">(6) USA</p>
                </span>
                <h3>Life lessons with Kate Zaferes</h3>
                <p className="price">
                <span>From $136  </span> /  person
                </p>
            </div>
        </div>

    )
}