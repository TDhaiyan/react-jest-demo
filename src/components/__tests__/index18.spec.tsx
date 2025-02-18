import { render, screen ,act, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import AsyncButton from "../react18vs16/index18";

describe("AsyncButton component", () => {
    test("renders button and initial count", async() => {
        render(<AsyncButton />);
        const countElement = await screen.findByText('0');
        expect(countElement).toBeInTheDocument();
    });

    test("increments count and toggles flag color on button click",  async() => {
        render(<AsyncButton />);
        const buttonElement = await screen.findByText('one');
        await userEvent.click(buttonElement);
        const countElement = await screen.findByText('1');

        expect(countElement).toHaveStyle({ color: "blue" });

        await userEvent.click(buttonElement);
        const updatedCountElement = await screen.findByText('2');
        expect(updatedCountElement).toHaveStyle({ color: "black" });
    });


    // test("increments count and toggles flag color on setTimeout button click", async () => {

    //   render(<AsyncButton />);
    //   const buttonElement = await screen.findByText('two');
    //   await userEvent.click(buttonElement);
    //   jest.useFakeTimers();

    //   await act(() => {
    //     jest.advanceTimersByTime(5000);
    //   });

    //   await waitFor(async () => {
    //     const countElement = await screen.findByText('11');
    //     expect(countElement).toHaveStyle({ color: "blue" });
    //   },  {timeout: 5000});

    //   await userEvent.click(buttonElement);


    //   await act(() => {
    //     jest.advanceTimersByTime(5000);
    //   });

    // await waitFor(async () => {

    //   const updatedCountElement = await screen.findByText('12');

    //   expect(updatedCountElement).toHaveStyle({ color: "black" });

    // }, {timeout: 5000});


    // });


  test('increments count and toggles flag color on setTimeout button click', async () => {
    // 使用 fake timers 来模拟 setTimeout
    jest.useFakeTimers();

    render(<AsyncButton />);


    const buttonElement = screen.getByText('two');


    userEvent.click(buttonElement);

    // 快进时间 500ms，触发 setTimeout 回调
    jest.advanceTimersByTime(500);
    // act(() => {
    //   jest.advanceTimersByTime(500);
    // });

    const countElement = await screen.findByText('11');
    expect(countElement).toHaveStyle({ color: 'blue' });

    userEvent.click(buttonElement);

    act(() => {
      jest.advanceTimersByTime(500);
    });

    const updatedCountElement = await screen.findByText('12');
    expect(updatedCountElement).toHaveStyle({ color: 'black' });


    jest.useRealTimers();
  });
});

