import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

const mockState = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};
const mockSetstate = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockState, mockSetstate],
}));

describe("Given a Counter component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render 4 list items", () => {
      const items = 4;

      render(<Counter />);
      const listItems = screen.getAllByRole("listitem");

      expect(listItems).toHaveLength(items);
      listItems.forEach((listItem) => expect(listItem).toBeInTheDocument());
    });

    test("And it should call the setState function", async () => {
      jest.useFakeTimers();

      render(<Counter />);

      jest.advanceTimersByTime(2000);
      expect(mockSetstate).toHaveBeenCalled();
    });

    test("And it should call the method setInterval", () => {
      jest.spyOn(global, "setInterval");

      render(<Counter />);

      expect(setInterval).toHaveBeenCalledTimes(1);
    });
  });
});
