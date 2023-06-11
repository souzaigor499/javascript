import React from "react";



export default function Display(props){
    return (
            <section className="container">
                <div className="section1"> 
                    <img src={`../images/${props.img28}`} alt="img28" />
                </div>
                <div className="section2">
                     <img src={`../images/${props.img30}`} alt="img30" />
                     <img src={`../images/${props.img26}`} alt="img26" />
                </div>
                <div className="section3">
                     <img src={`../images/${props.img27}`} alt="img27" />
                     <img src={`../images/${props.img29}`} alt="img29" />
                </div>
                <div className="section4">
                     <img src={`../images/${props.img22}`} alt="img22" />
                     <img src={`../images/${props.img23}`} alt="img23" />
                </div>
                <div className="section5">
                     <img src={`../images/${props.img25}`} alt="img25" />
                     <img src={`../images/${props.img28}`} alt="img24" />
                </div>

                
                
            </section>
    )
}
