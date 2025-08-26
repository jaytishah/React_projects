import { color } from "chart.js/helpers";
import React, { useState } from "react";
function counter()
{
    const [count,setCount] = useState(0);
    const increment = () => setCount(count +1);
    const decreament = () => setCount(count-1);
    const reset = () => setCount(0);

    return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment} style={buttonStyle}>+</button>
      <button onClick={decreament} style ={buttonStyle}>-</button>
      <button onClick={reset} style={buttonStyle}>Reset</button>
    </div>
  );


}
const buttonStyle = {
  margin: "5px",
  padding: "10px",
  fontSize: "16px",
  
};
export default Counter;