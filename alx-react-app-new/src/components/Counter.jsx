import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "10px", fontSize: "1rem" }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "10px", fontSize: "1rem" }}
      >
        Decrement
      </button>
      <button
        onClick={() => setCount(0)}
        style={{ margin: "5px", padding: "10px", fontSize: "1rem", backgroundColor: "red", color: "white" }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
