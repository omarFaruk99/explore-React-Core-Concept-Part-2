import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  function handleAdd() {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <h2>Show UseState</h2>
      <p>Show Count: {count}</p>
      <button onClick={handleAdd}>Add count value</button>
    </div>
  );
}
