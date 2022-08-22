import CounterStyled from "./Counter.Styled";

const Counter = (): JSX.Element => {
  return (
    <CounterStyled>
      <li className="list-item">
        <span className="list-item__timer"> 02</span>
        <span className="list-item__text">days</span>
      </li>
      <li className="list-item">
        <span className="list-item__timer">20</span>
        <span className="list-item__text">hours</span>
      </li>
      <li className="list-item">
        <span className="list-item__timer">34</span>
        <span className="list-item__text">minutes</span>
      </li>
      <li className="list-item">
        <span className="list-item__timer">02</span>
        <span className="list-item__text">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;
