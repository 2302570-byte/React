import Button from "./Button";
import { useState } from "react";

function App() {

  const [color, setColor] = useState("red");
  
  return (
    <>
       <h1>{color}</h1>
       
       <input type="text" placeholder="Enter color" onChange={(e) => setColor(e.target.value)} /> 
    </>
  )
}

export default App