import { useCallback } from "react";

const useTimes = () => {
  const getTime = useCallback((endingDate: number, timeNow: number) => {
    let timeLeft = endingDate - timeNow / 1000;
    const timerCountdown = {
      seconds: Math.floor(timeLeft % 60),
      minutes: Math.floor((timeLeft % 3600) / 60),
      hours: Math.floor((timeLeft % (3600 * 24)) / 3600),
      days: Math.floor(timeLeft / (3600 * 24)),
    };
    return timerCountdown;
  }, []);

  return { getTime };
};

export default useTimes;
