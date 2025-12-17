import React, { useContext } from "react";

import { NotificationContext } from "./context/NotificationsContext";

const StatusBar = () => {
  const { notificationEnabled, channels, quietHours } =
    useContext(NotificationContext);
  return (
    <div>
      <h3>Current Setting</h3>
      <div>
        <p>Notification:</p>
        <p>{notificationEnabled ? "Enabled" : "Disabled"}</p>
      </div>
      <div>
        <p>Notification Type:</p>
        <p>{channels}</p>
      </div>
      <div>
        <p>Quite Hour</p>
        <p>Start:{quietHours.startTime}</p>
        <p>End:{quietHours.endTime}</p>
      </div>
    </div>
  );
};

export default StatusBar;
