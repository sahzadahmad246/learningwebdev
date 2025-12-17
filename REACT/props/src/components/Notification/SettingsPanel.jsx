import React, { useState } from "react";
import { Toggle } from "./Toggle";
import { useContext } from "react";
import { NotificationContext } from "./context/NotificationsContext";
const SettingsPanel = () => {
  const {
    notificationEnabled,
    channels,
    quietHours,
    handleNotificationEnabled,
    handleChannels,
    handleQuietHours,
  } = useContext(NotificationContext);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleStartChange = (e) => {
    e.preventDefault();
    setStart(e.target.value);
  };
  const handleEndChange = (e) => {
    e.preventDefault();
    setEnd(e.target.value);
  };
  const handlQuiteHourSave = () => {
    handleQuietHours(start, end);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-5/10">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Settings</h2>

        <div className="flex justify-between items-start border-b border-gray-300">
          <p>Notification</p>
          <div className="mb-4 flex ">
            <Toggle
              toggled={notificationEnabled}
              onClick={() => handleNotificationEnabled(!notificationEnabled)}
            />
            <strong
              className={`ml-3 ${
                notificationEnabled ? "text-blue-600" : "text-gray-500"
              }`}
            >
              {notificationEnabled ? "ON" : "OFF"}
            </strong>
          </div>
        </div>
        <div className="flex justify-between items-start border-b border-gray-300 mt-3">
          <p>Notification type</p>
          <div className="mb-4 flex ">
            <div className="">
              <select
                id="options"
                value={channels}
                onChange={(e) =>
                  e.target.value !== "choose one" &&
                  handleChannels(e.target.value)
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="choose one" disabled selected>
                  Choose one...
                </option>
                <option value="sms">SMS</option>
                <option value="email">Email</option>
                <option value="push">Push</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start border-b border-gray-300 mt-3">
          <p>Quite hours</p>
          <div className="flex gap-6 mb-4">
            {/* 1. Start Time */}
            <div>
              <label
                htmlFor="start-time"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Start Time
              </label>
              <input
                type="time"
                id="start-time"
                onChange={handleStartChange}
                value={quietHours.startTime || ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>

            {/* 2. End Time */}
            <div>
              <label
                htmlFor="end-time"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                End Time
              </label>
              <input
                type="time"
                onChange={handleEndChange}
                id="end-time"
                value={quietHours.endTime || ""}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <button onClick={handlQuiteHourSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
