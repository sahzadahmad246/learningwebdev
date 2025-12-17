import React, { useState } from "react";

const Button = ({ text, color, size, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 mt-3 rounded-lg transition-all duration-100 font-medium ${
        size === "small" ? "text-sm px-4 py-1" : ""
      } ${size === "large" ? "text-sm px-7 py-3" : ""} ${
        color === "primary" ? "bg-blue-500 hover:bg-blue-700 text-white" : ""
      } ${
        color === "secondary" ? "bg-gray-500 hover:bg-gray-700 text-white" : ""
      } ${
        color === "danger" ? "bg-red-500 hover:bg-red-700 text-white " : ""
      } ${
        color === "success" ? "bg-green-500 hover:bg-green-700 text-white" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      {text}
    </button>
  );
};
const BasicProps = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 ">
      <div>
        <h2 className="text-2xl font-semibold">Basic Props</h2>
        <p className="text-gray-400 text-sm">
          Basic props help shape your component’s behavior by defining simple,
          reusable options like size, color, labels, and states, making
          interfaces consistent and easy to control.
        </p>
      </div>
      <h2 className="text-sm font-semibold mt-4 ">Small Button</h2>
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => setCount(count + 1)}
          text="Primary Button"
          size="small"
          color="primary"
        />
        <Button
          onClick={() => setCount(count + 1)}
          text="Secondary Button"
          size="small"
          color="secondary"
        />
        <Button
          onClick={() => setCount(count + 1)}
          text="Danger Button"
          size="small"
          color="danger"
        />
        <Button
          onClick={() => setCount(count + 1)}
          text="success Button"
          size="small"
          color="success"
        />
        <Button
          onClick={() => setCount(count + 1)}
          text="Disabled Button"
          size="small"
          color="primary"
          disabled
        />
      </div>

      <h2 className="text-sm font-semibold mt-4 ">
        Larger Button
      </h2>
      <div className="flex flex-wrap gap-3">
        <Button
          onClick={() => setCount(count + 1)}
          text="Primary Button"
          size="large"
          color="primary"
        />
        <Button
          onClick={() => count > 0 && setCount(count - 1)}
          text="Decrease count"
          size="large"
          color="secondary"
        />
        <Button
          onClick={() => setCount(0)}
          text="Reset Count"
          size="large"
          color="danger"
        />
        <Button
          onClick={() => setCount(count + 1)}
          text="success Button"
          size="large"
          color="success"
        />
        <Button
          onClick={() => setCount(count + 1)}
          text="Primary Button"
          size="large"
          color="primary"
          disabled
        />
      </div>

      <div className="bg-blue-100 mt-4 p-3 rounded border border-blue-700 text-xl font-semibold text-blue-700">
        Count {count}
      </div>
    </div>
  );
};

export default BasicProps;
