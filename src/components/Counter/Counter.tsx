import { useEffect, useState } from "react";
import useTimes from "../../hooks/useTimes";
import finalDate from "../../utils/finalDate";

import CounterStyled from "./Counter.Styled";

const Counter = (): JSX.Element => {
  const { getTime } = useTimes();
  const initialTime = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setInterval(() => {
      const timeNow = new Date().getTime();
      setTime(getTime(finalDate, timeNow));
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
