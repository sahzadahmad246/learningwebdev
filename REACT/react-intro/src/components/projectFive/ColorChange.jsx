import React, { useState } from "react";
import ChangeButton from "./ChangeButton";
const ColorChange = () => {
  const [clickCount, setClickCount] = useState(0);

  function handleClickCount() {
    setClickCount(clickCount + 1);
  }
  function changeColorClick(e) {
    e.stopPropagation();
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    console.log(r);
    console.log(g);
    console.log(b);
    let colorCode = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = colorCode;
  }
  return (
    <div className="main-colorbody" onClick={handleClickCount}>
      <div className="content-div">
        <ChangeButton changeColorClick={changeColorClick} />
        <p>You have Clicked {clickCount} times</p>
      </div>
    </div>
  );
};

export default ColorChange;
