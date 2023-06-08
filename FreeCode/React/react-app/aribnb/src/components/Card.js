import React from "react";
import star from '../images/Star 1.png'


export default function Card({img, rating, reviewCount, country, title, price}){
    return (
        <div className="main-content">
            <div className="content">
                <img alt="kate" src={img} />
                <span className="rating">
                <p className="p-rating"> <img alt="" src={star} />{rating}</p>
                <p className="country">({reviewCount}) {country}</p>
                </span>
                <h3>{title}</h3>
                <p className="price">
                <span>From ${price}  </span> /  person
                </p>
            </div>
            {console.log(img)}
        </div>
        

    )
    }

    