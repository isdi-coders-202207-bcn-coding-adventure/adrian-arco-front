import { renderHook } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { store } from "../store/store";
import useTimes from "./useTimes";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <reactRedux.Provider store={store}>{children}</reactRedux.Provider>;
};

describe("Given a useTimes custom hook", () => {
  describe("When it's invoked with the getTime method and one day of diference between each parameter", () => {
    test("Then it should return 1 day as time left", () => {
      const timeStart = new Date("2022-08-26").getTime() / 1000;
      const timeNow = new Date("2022-08-25").getTime();
      const expectedRedurn = {
        days: 1,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
      const {
        result: {
          current: { getTime },
        },
      } = renderHook(useTimes, { wrapper: Wrapper });

      const getTimeReturn = getTime(timeStart, timeNow);

      expect(getTimeReturn).toStrictEqual(expectedRedurn);
    });
  });
});
