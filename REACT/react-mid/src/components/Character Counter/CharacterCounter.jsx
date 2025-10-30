import React, { useState } from "react";

export const CharacterCounter = () => {
  const [value, setVlaue] = useState("");
  const maxlength = 100;
  const charCount = value.length;
  const isLimitReached = charCount >= maxlength;

  return (
    <div className="bg-gray-800  shadow-lg p-4 border border-gray-700 h-screen flex justify-center">
      <textarea
        maxLength={maxlength}
        onChange={(e) => setVlaue(e.target.value)}
        className={`border  w-5/10 mx-auto h-30 text-white rounded p-3 outline-0 ${
          isLimitReached ? "border-red-400" : "border-gray-400"
        }`}
        disabled={isLimitReached}
      />
      <div className="text-white">
        {charCount}/{maxlength}
      </div>
    </div>
  );
};
