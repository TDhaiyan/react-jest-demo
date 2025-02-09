import { render, screen , } from "@testing-library/react";
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

});

