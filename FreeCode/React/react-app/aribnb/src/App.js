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
      <Card />
    </div>
  )
}