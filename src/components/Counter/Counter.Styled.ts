import styled from "styled-components";
import "@fontsource/oxanium";

const CounterStyled = styled.ul`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  background-color: #243342;
  height: 300px;
  font-family: "Oxanium";

  .list-item {
    font-family: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__timer {
      font-size: 2rem;
      display: flex;
      color: #243342;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 90px;
      background-color: #ffc700;
      border-radius: 20px;
    }
    &__text {
      color: white;
    }
  }
`;

export default CounterStyled;
