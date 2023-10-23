import React, { createContext } from "react";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import ResultPicker from "../../components/ResultPicker";
import "@testing-library/jest-dom";
import { TableContext } from "../../App";

it("render result picker component normally", () => {
    render(<ResultPicker/>);
    expect(screen.getByText("NUM RESULTS")).toBeInTheDocument();
})

it("render default number", () => {
    render(<ResultPicker/>);
    expect(screen.getByText("50")).toBeInTheDocument();
})


it("render options on click", async () => {
    const { getByText } = render(<ResultPicker/>);
    const dropdownText = getByText("NUM RESULTS");
    fireEvent.click(dropdownText);
    await waitFor(() => {
        expect(getByText("25")).toBeInTheDocument()
    });
})

it("changes number on click", async () => {
    const setItemNumber = jest.fn()
    const providerProps = {
        itemNumber: 50,
        setItemNumber: setItemNumber,
        date: new Date(),
        setDate: jest.fn(),
        articles: [],
        setArticles: jest.fn(),
        country: "US",
        setCountry: jest.fn(),
        error: "",
        setError: jest.fn()
      }
    const { getByText, getByLabelText } = render(
        <TableContext.Provider value={providerProps}>
            <ResultPicker/>
        </TableContext.Provider>
    );
    const dropdownText = getByText("NUM RESULTS");
    fireEvent.click(dropdownText);
    await waitFor(() => {
        expect(getByText("25")).toBeInTheDocument()
    });
    const optionText = getByText("200");
    fireEvent.click(optionText);
    await waitFor(() => {
        expect(setItemNumber).toBeCalled();
    });
})