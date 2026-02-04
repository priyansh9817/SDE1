import { useState } from "react";
import Child from "./Components/Child";
function App() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Parent
      </button>

      <Child name="Priyanshu" />
    </>
  );
}

export default App;
