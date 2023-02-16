import React, { useState } from "react";
import './App.css'

function App() {
    const [number,setNumber] = useState(0)

    return (
      <div className="counter">
        <h1>Simple React Counter</h1>
        <h2>{number}</h2>
        <button className='btn' onClick={()=>{setNumber(number + 1)}}>+</button>
        <button className='btn' onClick={()=>{setNumber(number - 1)}}>-</button>
        <button className='btn' onClick={() => { setNumber(0) }}>reset</button>
      </div>
  );
}

export default App;
