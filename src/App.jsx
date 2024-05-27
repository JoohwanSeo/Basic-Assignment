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
  }


  return (
    <div>
      <h1>
        {name}
      </h1>
      <section>
        Count : {count}
        <button onClick={handleCountUp}>+</button>
        <button onClick={handleCountDown}>-</button>
        <button onClick={handleReset}>Reset</button>
        <div>

        </div>
      </section>
    </div>
  );
};

export default App;


// const App = () => {
//   const [dark, setDark] = useState(false);

//   const handleDarkMode = () => {
//     setDark(!dark);
//   };
//   return (
//     <div>
//       <h1>다크모드</h1>
//       {dark ? "Dark" : "Light"}
//       <button onChange={handleDarkMode}>change</button>
//     </div>
//   );
// };

// export default App;
