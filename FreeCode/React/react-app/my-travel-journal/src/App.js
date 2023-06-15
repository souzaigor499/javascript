import Travels from "./components/Travels";
import  data  from "./data";
import img from "./img";
import Navbar from "./components/Navbar";
function App() {
  
    const dataTravel = data.map((item => {
      return <Travels 
      {...item}
      />
    }))

    const navbar = img.map((img => {
      return <Navbar
      {...img}
      
      />
    }))

    return (
      <div className="content">
      {navbar}
      <main className="main">
        
        {dataTravel}
      </main>
      </div>
    )
    
    ;
}

export default App;
