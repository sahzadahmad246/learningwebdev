import React, { useMemo, useState } from "react";

const NumberList = ({ number }) => {
  const [counter, setCounter] = useState(0);

  const sum = useMemo(() => {
    console.log("calculating sum....");
    return number.filter((n) => n > 1000).reduce((acc, crr) => acc + crr, 0);
  }, [number]);
  return (
    <div>
      <h2>Sum of numbers &gt; 1000: {sum}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter ({counter})
      </button>
    </div>
  );
};

export default NumberList;
