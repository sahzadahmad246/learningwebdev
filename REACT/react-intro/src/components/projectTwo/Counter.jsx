import React, { useState } from "react";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="main-counter">
      <p className="count-para">you have clicked {count} times</p>
      {count > 20 && <p className="mercy-para">Have some mercy mf</p>}
      <div className="count-btns">
        <button
          onClick={() => setCount(count > 0 ? count - 1 : 0)}
          className="count-decrease"
        >
          Decrease -
        </button>
        <button onClick={() => setCount(count + 1)} className="count-increase">
          Increase +
        </button>
      </div>
    </div>
  );
};
