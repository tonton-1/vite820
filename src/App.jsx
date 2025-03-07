import { useState } from "react";

import "./App.css";

import Leftsection from "./sections/leftsection";
import Rightsection from "./sections/rightsection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mp-14 mx-auto max-w-6x1 grid grid-cols-[40%_60%]">
      <Leftsection />
      <Rightsection />
    </div>
  );
}

export default App;
