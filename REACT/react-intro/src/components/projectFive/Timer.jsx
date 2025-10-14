import React, { useEffect, useState } from "react";

const Timer = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div>
      <div>Number is : {number}</div>
    </div>
  );
};

export default Timer;
