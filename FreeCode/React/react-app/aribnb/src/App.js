
import images from "./images";
import React from "react";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Title from "./components/Title";
import Card from "./components/Card";


import  data  from "./data";
console.log(data)




export default function App(){

    const dataMap = data.map((item => {
      return <Card 
      key={item.id} 
      {...item}
      />  
    }))

    const navbar = images.map((src =>{
      return <Navbar 
        {...src}
      />
    }))

    const display = images.map((src => {
      return <Display 
        {...src}
      />
    }))

  return (
    <div >
      {navbar}
      {display} 
      <Title />
      <div className="main-content">
        {dataMap}
      </div>
      
    </div>
  )
}