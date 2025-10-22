import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [count, setCount] = useState(0);

  const timer = useRef(null);

  const handleStart = () => {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };
  const handleReset = () => {
    handleStop();
    setCount(0);
  };
  return (
    <div className=" bg-[#090b17] h-screen text-white flex justify-center items-center flex-col">
      <div className="bg-[#202751] w-3/10 p-5 rounded-xl">
        <h1 className="text-center pb-3 text-lg">Stopwatch</h1>
        <p className="text-4xl text-center font-bold pb-3">{count}</p>
        <div className="flex justify-evenly mt-4">
          <button
            className="bg-white text-[#202751] px-3 py-1 rounded-lg cursor-pointer"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="bg-white text-[#202751] px-3 py-1 rounded-lg cursor-pointer"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="bg-white text-[#202751] px-3 py-1 rounded-lg cursor-pointer"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
