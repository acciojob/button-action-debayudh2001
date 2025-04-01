import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [show, setShow] = useState(false)
  function handleClick(){
    setShow(true)
  }
  return (
    <div className="App" id="main">
      <button id="click" onClick={handleClick}>Click Me</button>
      <p id="para" className={show ? "show" : "hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
    </div>
  );
}

export default App
