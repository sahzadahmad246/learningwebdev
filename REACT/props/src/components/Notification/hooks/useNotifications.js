import { useState } from "react";


export const useNotification = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(() => {
    try {
      const notificationStatus = localStorage.getItem("notificationEnabled");
      return JSON.parse(notificationStatus);
    } catch (error) {
      console.log("Failed to load notis status", error);
    }
  });

  const [channels, setChannels] = useState(() => {
    try {
      const availableChannels = localStorage.getItem("channels");
      return JSON.parse(availableChannels);
    } catch (error) {
      console.log("Failed to load channels status", error);
    }
  });
  const [quietHours, setQuietHours] = useState(() => {
    try {
      const currentQuietHours = localStorage.getItem("quietHours");
      return JSON.parse(currentQuietHours);
    } catch (error) {
      console.log("Failed to load currentQuietHours status", error);
    }
  });

  const handleNotificationEnabled = (newSetting) => {
    try {
      setNotificationEnabled(newSetting);
      localStorage.setItem("notificationEnabled", JSON.stringify(newSetting));
    } catch (error) {
      console.log("Failed to load currentQuietHours status", error);
    }
  };

  const handleChannels = (newSetting) => {
    try {
    
      setChannels(newSetting);
      localStorage.setItem("channels", JSON.stringify(newSetting));
    } catch (error) {
      console.log("Failed to load currentQuietHours status", error);
    }
  };
  const handleQuietHours = (startTime, endTime) => {
    try {
      setQuietHours({ startTime: startTime, endTime: endTime });
      localStorage.setItem(
        "quietHours",
        JSON.stringify({ startTime: startTime, endTime: endTime })
      );
    } catch (error) {
      console.log("Failed to load currentQuietHours status", error);
    }
  };

  return {
    notificationEnabled,
    channels,
    quietHours,
    handleNotificationEnabled,
    handleChannels,
    handleQuietHours,
  };
};
