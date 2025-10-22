import React, { useRef } from "react";

export const Focus = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div className="bg-[#090b17] h-screen text-white flex justify-center items-center flex-col">
      <input
        ref={inputRef}
        placeholder="Enter anything bro"
        className="border border-[#bec2db] p-2 rounded-lg mb-3"
      />
      <button
        className="bg-[#f2efef] text-[#090b17] p-2 mt-3 rounded-lg"
        onClick={handleFocus}
      >
        Click to focus input box
      </button>
    </div>
  );
};
