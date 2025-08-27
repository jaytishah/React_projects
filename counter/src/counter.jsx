// counter.js
import React, { useState } from "react";
 let count=0;

function Counter() {   // ✅ Must be uppercase
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decreament = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button onClick={increment} >+</button>
      <button onClick={decreament} >-</button>
      <button onClick={reset} >Reset</button>
    </div>
  )
}


export default Counter;
