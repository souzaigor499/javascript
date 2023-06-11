import React from "react"
export default function Card(props){
        console.log(props)

        let badgeText
        if(props.openSpots === 0){
            badgeText = 'SOLD OUT'
        } else if(props.location === "Online"){
            badgeText = 'ONLINE'
        }


    return (
        
            <div className="content">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                
                <img alt="" src={`../images/${props.coverImg}`} />
                <span className="rating">
                <p className="p-rating"> <img alt="star" src={`../images/${props.star}`}  />{props.rating}</p>
                <p className="country">({props.reviewCount}) {props.location}</p>
                </span>
                <h3>{props.title}</h3>
                <p className="price">
                <span>From ${props.price}  </span> /  person
                </p>
            </div>
    )
    }

    