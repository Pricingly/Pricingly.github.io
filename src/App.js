// useState allows you to update the state of a component
// useEffect runs a function when a component is mounted or updated
// useRef is like useState but does not rerender the DOM and returns an object with a current property 
import React, { useEffect, useState } from "react";

import "./app.css";
import Home from "./app-components/Home";

// You can use return() to return multiple lines
function App() {

  // useState returns an array with 2 values so we can split its values into 2 variables (object destructuring)
  const [count, setCount] = useState(0);

  // empty array means run once only even if rerendered
  useEffect(() => {
    console.log("App component mounted (rendered)");
  }, []);


  function incrementCounter(){
    setCount((previous) => {
      // update count
      return previous += 1;
    })
  }

  return (
  
    <>
      <Home />
      
      <div className="box-container">
        <h1>Counter: {count}</h1>
        <button onClick={incrementCounter}>Increment</button>
      </div>

    </>
    )
}

export default App;
