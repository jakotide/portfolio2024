import { useState, useEffect } from "react";

export function useOsloTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Oslo",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedTime = formatter
    .format(time)
    .replace(/(\d+:\d+)(\s*)([APM]{2})/, "$1 $3");

  return formattedTime;
}
