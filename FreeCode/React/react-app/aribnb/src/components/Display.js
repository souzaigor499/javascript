import React from "react";

import img22 from '../images/image 22.png'
import img23 from '../images/image 23.png'
import img24 from '../images/image 24.png'
import img25 from '../images/image 25.png'
import img26 from '../images/image 26.png'
import img27 from '../images/image 27.png'
import img28 from '../images/image 28.png'
import img29 from '../images/image 29.png'
import img30 from '../images/image 30.png'

export default function Display(){
    return (
            <section className="container">
                <div className="section1"> 
                    <img src={img28} alt="img28"></img>
                </div>
                <div className="section2">
                     <img src={img30} alt="img30"></img>
                     <img src={img26} alt="img26"></img>
                </div>
                <div className="section3">
                     <img src={img27} alt="img27"></img>
                     <img src={img29} alt="img29"></img>
                </div>
                <div className="section4">
                     <img src={img22} alt="img22"></img>
                     <img src={img23} alt="img23"></img>
                </div>
                <div className="section5">
                     <img src={img25} alt="img25"></img>
                     <img src={img24} alt="img24"></img>
                </div>

                
                
            </section>
    )
}
