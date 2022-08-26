import { useCallback, useEffect, useState } from "react";
import finalDate from "../../utils/finalDate";
import CounterStyled from "./Counter.Styled";

const Counter = (): JSX.Element => {
  const initialTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [time, setTime] = useState(initialTime);

  const getTime = useCallback(() => {
    const timeLeft = finalDate - new Date().getTime() / 1000;
    const timerCountdown = {
      seconds: Math.floor(timeLeft % 60),
      minutes: Math.floor((timeLeft % 3600) / 60),
      hours: Math.floor((timeLeft % (3600 * 24)) / 3600),
      days: Math.floor(timeLeft / (3600 * 24)),
    };
    setTime(timerCountdown);
  }, []);

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, [getTime]);

  return (
    <CounterStyled>
      <li className="list-item">
        <span className="list-item__timer">{time.days}</span>
        <span className="list-item__text">days</span>
      </li>
      <li className="list-item">
        <span className="list-item__timer">{time.hours}</span>
        <span className="list-item__text">hours</span>
      </li>
      <li className="list-item">
        <span className="list-item__timer">{time.minutes}</span>
        <span className="list-item__text">minutes</span>
      </li>
      <li className="list-item">
        <span className="list-item__timer">{time.seconds}</span>
        <span className="list-item__text">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;
