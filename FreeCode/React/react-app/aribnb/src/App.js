import React from "react";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Title from "./components/Title";
import Card from "./components/Card";


export default function App(){
  return (
    <div >
      <Navbar />
      {/* <Display /> */}
      <Title />
      <Card 
          img = '/static/media/image12.05dcfde48c20d03293a6.png'
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life lessons with Kate Zaferes"
          price = {136}

      />
    </div>
  )
}