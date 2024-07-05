import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 15

  const addValue = () => {
    //counter = counter + 1;
    setCounter(counter + 1);
   // console.log("value added", counter);
  };

  const removeValue = () => {
   // counter = counter - 1;
    console.log("value removed", counter);
    setCounter(counter - 1);

}
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br></br>
      <button onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
