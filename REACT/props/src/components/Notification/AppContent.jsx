import React from "react";
import { NotificationContext } from "./context/NotificationsContext";
import { useNotification } from "./hooks/useNotifications";

import SettingsPanel from "./SettingsPanel";
import StatusBar from "./StatusBar";

export const NotificationProvider = ({ children }) => {
  const value = useNotification();
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

const AppContent = () => {
  return (
    <NotificationProvider>
      <div>
      <SettingsPanel/>
      <StatusBar/>
      </div>
    </NotificationProvider>
  );
};

export default AppContent;
