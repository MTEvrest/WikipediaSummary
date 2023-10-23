import React, { createContext } from "react";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import CountryPicker from "../../components/CountryPicker";
import "@testing-library/jest-dom";
import { TableContext } from "../../App";

it("render country picker component normally", () => {
    render(<CountryPicker/>);
    expect(screen.getByText("COUNTRY")).toBeInTheDocument();
})

it("render default country", () => {
    render(<CountryPicker/>);
    expect(screen.getByText("United States of America")).toBeInTheDocument();
})

it("render country dropdown on click", async () => {
    const { getByText } = render(<CountryPicker/>);
    const dropdownText = getByText("United States of America");
    fireEvent.click(dropdownText);
    await waitFor(() => {
        expect(getByText("Antarctica")).toBeInTheDocument()
    });
})

it("changes country on click", async () => {
    const setCountry = jest.fn()
    const providerProps = {
        itemNumber: 50,
        setItemNumber: jest.fn(),
        date: new Date(),
        setDate: jest.fn(),
        articles: [],
        setArticles: jest.fn(),
        country: "US",
        setCountry: setCountry,
        error: "",
        setError: jest.fn()
      }
    const { getByText } = render(
        <TableContext.Provider value={providerProps}>
            <CountryPicker/>
        </TableContext.Provider>
    );
    const dropdownText = getByText("United States of America");
    fireEvent.click(dropdownText);
    await waitFor(() => {
        expect(getByText("Antarctica")).toBeInTheDocument();
    });
    const dropdownSelection = getByText("Bermuda");
    fireEvent.click(dropdownSelection);
    await waitFor(() => {
        expect(setCountry).toBeCalled();
    });
})