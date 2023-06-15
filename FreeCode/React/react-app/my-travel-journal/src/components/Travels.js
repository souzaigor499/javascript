import React from 'react'

export default function Travels(props){

    return(
        <container className='container'>
            <figure>
                <img className='mainImg' src={props.img} alt={`${props.name}-logo`}/>
            </figure>
            <section className='info'>
                <div className='location'>
                    <img src={`../images/${props.icon}`} alt='location-png'/> 
                    <h4>{props.country}</h4>
                    <a href={props.location}>View on Google Maps</a>
                </div>

                <h1 className='name'>{props.name}</h1>

                <h2 className='date'>{props.date}</h2>
                <p className='about'>{props.about}</p>
            </section>
        </container>
    )
}