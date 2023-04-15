import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const plusButtonClickHandler = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -1
        </button>
        <button onClick={plusButtonClickHandler}>+1</button>
        {/* plusButtonClickHandler 에 괄호 넣으면 버튼 누르기도 전에 실행되어 버림!*/}
      </div>
    </div>
  );
}

export default App;
