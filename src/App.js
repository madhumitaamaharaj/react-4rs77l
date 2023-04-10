import React,{useState} from "react";
import "./style.css";

export default function App() {
  const greetings=["Hello","Hi","Hey"];
  const [newGreet,setNewGreet]=useState(0);
  const handleclick=()=>{
    setNewGreet(newGreet===greetings.length -1 ? 0: newGreet+1);
  }
  return (
    <div>
      <h1>{greetings[newGreet]}</h1>
     <button onClick={handleclick}>Next Greettings</button>
    </div>
  );
}
