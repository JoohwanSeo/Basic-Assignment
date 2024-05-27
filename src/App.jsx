import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
  };

  const handleCountDown = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
     <h2>COUNTER</h2>
      <section className="wrapper">
        Count : {count}
        <button className="plusBtn" onClick={handleCountUp}>+</button>
        <button className="minusBtn" onClick={handleCountDown}>-</button>
        <button className="resetBtn" onClick={handleReset}>Reset</button>
        <div></div>
      </section>
    </div>
  );
};

export default App;
