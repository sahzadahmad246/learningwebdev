import React from "react";
import { useCounter } from "../store/counterStore";

export const Counter = () => {
  //   const { count, increase, decrease,  } = useCounter();
  const count = useCounter((state) => state.count);
  const increase = useCounter((state) => state.increase);
  const decrease = useCounter((state) => state.decrease);
  const reset = useCounter((state) => state.reset);
  return (
    <div>
      <h2>Counter app</h2>
      <div>
        <p>Count is: {count}</p>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};
