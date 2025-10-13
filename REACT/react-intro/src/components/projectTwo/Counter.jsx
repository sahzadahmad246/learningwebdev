import React, { useState } from "react";
import { Button } from "./Button";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);
  function increaseCount(e) {
    e.preventDefault();
    setCount(count + 1);
  }
  const decreaseCount = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="main-counter">
      <p className="count-para">you have clicked {count} times</p>
      {count > 20 && <p className="mercy-para">Have some mercy mf</p>}
      <div className="count-btns">
        <Button onclickFunction={decreaseCount} buttonText="Decrease" />
        <Button onclickFunction={increaseCount} buttonText="Increase" />
      </div>
    </div>
  );
};
