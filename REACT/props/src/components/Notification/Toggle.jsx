import { useState } from 'react';

// 1. The Toggle Component
export const Toggle = ({ toggled, onClick }) => {
  return (
    <label className="flex items-center cursor-pointer relative">
      <div className="relative">
        {/* Hidden Input for Accessibility/Form handling */}
        <input
          type="checkbox"
          className="sr-only"
          checked={toggled}
          onChange={onClick}
        />
        
        {/* Track (Background) */}
        <div
          className={`w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-checkbox transition-colors duration-300 ease-in-out ${
            toggled ? 'bg-blue-600 border-blue-600' : 'bg-gray-200'
          }`}
        ></div>
        
        {/* Thumb (Circle) */}
        <div
          className={`absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full shadow-sm transform transition-transform duration-300 ease-in-out ${
            toggled ? 'translate-x-5' : 'translate-x-0'
          }`}
        ></div>
      </div>
      
     
    </label>
  );
};

// 2. Usage Example
export default function App() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Notification Settings</h2>
        
        {/* Example 1: Basic usage */}
        <div className="mb-4">
          <Toggle 
            label="Enable Email Notifications" 
            toggled={isToggled} 
            onClick={() => setIsToggled(!isToggled)} 
          />
        </div>

        {/* Example 2: Showing state */}
        <p className="mt-4 text-sm text-gray-500">
          Current State: <strong className={isToggled ? "text-blue-600" : "text-gray-500"}>
            {isToggled ? "ON" : "OFF"}
          </strong>
        </p>
      </div>
    </div>
  );
}