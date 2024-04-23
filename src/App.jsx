import { useState, useContext } from "react";
import { StudentContext } from ".";
export function MyApp() {
  let [count, setCount] = useState(0);
  const data = useContext(StudentContext);
  return (
    <div>
      <h1>Welcome to my app {count}</h1>
      <p>{data}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: "20px" }}>
        Remove
      </button>
    </div>
  );
}
export default MyApp;
