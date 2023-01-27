import "./App.css";
import { useState } from "react";

function App() {
  
  const [val, setVal] = useState('');
  const [showText, setShowText] = useState(true);
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setShowText(!showText);
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setVal(event.target.value)
  }

  const countZero = () => {
    setCount(0);
  }

  const countMinus = () => {
    setCount(count-1);
  }

  const countPlus = () => {
    setCount(count+1);
  }

  return (
    <div className="App">
      <input type="text" onChange={handleInputChange}/>
      {val}
      <br />
      <button onClick={handleButton}>Show/Hide</button>
      {showText && <h1> Hi My Name Is Karthik Vajja </h1>}
      <br />
      <button onClick={countPlus}>Increase</button>
      <button onClick={countMinus}>Decrease</button>
      <button onClick = {countZero}>Set to Zero</button>
      {count}
    </div>
  );
}



export default App;
