import { useState, useEffect } from "react";

type CountdownReturnType = {
  hours: string;
  minutes: string;
  seconds: string;
};

/**
 * Custom hook for a 5-hour countdown timer that resets upon completion.
 */
const useCountdown = (): CountdownReturnType => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return 5 * 60 * 60; // Reset to 5 hours
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Convert seconds to hours, minutes, and seconds
  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return { hours, minutes, seconds };
};

export default useCountdown;
