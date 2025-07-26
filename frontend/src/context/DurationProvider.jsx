import { createContext } from "react";

export const DurationContext = createContext();

function DurationProvider({ children }) {
  function formatDuration(tsStart, tsEnd) {
    const start = new Date(tsStart);
    const end = new Date(tsEnd);

    const timeFormatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const dateFormatter = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const startTime = timeFormatter.format(start); // e.g., 14:35
    const endTime = timeFormatter.format(end); // e.g., 14:37
    const date = dateFormatter.format(start); // e.g., 7 Jul 2025

    return `${startTime} - ${endTime} on ${date}`;
  }
  const value = {formatDuration};
  return (
    <DurationContext.Provider value={value}>
      {children}
    </DurationContext.Provider>
  );
}

export default DurationProvider;
