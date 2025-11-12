import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  const reset = () => setValue("");
  const back = () => setValue(value.slice(0, -1));

  const evaluateExpression = () => {
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
      console.error(error);
    }
  };

  
  const handleClick = (e) => setValue(value + e.target.value);
  

  return (
    <>
      <h2>React Calculator</h2>
      <input
        type="text"
        name="display"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <div>
        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>
        <button value="/" onClick={handleClick}>/</button>

        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>
        <button value="*" onClick={handleClick}>*</button>

        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>
        <button value="+" onClick={handleClick}>+</button>

        <button value="0" onClick={handleClick}>0</button>
        <button value="." onClick={handleClick}>.</button>
        <button value="-" onClick={handleClick}>-</button>

        <button onClick={evaluateExpression}>=</button>
        <button onClick={reset}>C</button>
        <button onClick={back}>⌫</button>
      </div>
    </>
  );
}
