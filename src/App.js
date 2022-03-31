import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Set name of counts ${count}`;
  });

  return (
    <div className="App">
      <h1>Clicks {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
