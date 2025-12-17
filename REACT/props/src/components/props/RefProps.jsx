import React, { forwardRef, useRef } from "react";
import toast from "react-hot-toast";

const CustomInput = forwardRef(({ label, placeholder }, ref) => {
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={label} className="mb-1 text-gray-300 text-sm">
        {label}
      </label>

      <input
        ref={ref}
        id={label}
        type="text"
        placeholder={placeholder}
        className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 outline-none focus:border-purple-400 transition"
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

const RefProps = () => {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => inputRef.current?.focus();

  const getInputValue = () => {
    if (inputRef.current) {
      toast.success(inputRef.current.value || "Input is empty");
    }
  };

  const clearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => secondInputRef.current?.focus();

  return (
    <div className="text-white p-6 max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg mt-6">
      <CustomInput
        ref={inputRef}
        label="First Input"
        placeholder="Type something..."
      />

      <CustomInput
        ref={secondInputRef}
        label="Second Input"
        placeholder="Type something else..."
      />

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          onClick={focusInput}
          className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
        >
          Focus First Input
        </button>

        <button
          onClick={getInputValue}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          Get First Input
        </button>

        <button
          onClick={clearInputValue}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition"
        >
          Clear First Input
        </button>

        <button
          onClick={focusSecondInput}
          className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
        >
          Focus Second Input
        </button>
      </div>
    </div>
  );
};

export default RefProps;
