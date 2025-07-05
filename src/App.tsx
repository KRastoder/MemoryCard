import { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button
        className="outline-red-950 outline-1 bg-gray-900 rounded-sm cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Press me to increase count xd
      </button>
    </div>
  );
}

export default App;
