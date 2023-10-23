import React, { createContext } from "react";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import DatePicker from "../../components/DatePicker";
import "@testing-library/jest-dom";
import { TableContext } from "../../App";
var moment = require("moment"); 

it("render date picker component normally", () => {
    render(<DatePicker/>);
    expect(screen.getByText("DATE")).toBeInTheDocument();
})

it("render default date", () => {
    render(<DatePicker/>);
    const date = new Date();
    expect(screen.getByText(moment(date).format("MMMM D, Y"))).toBeInTheDocument();
})


it("render calendar on click", async () => {
    const { getByText } = render(<DatePicker/>);
    const dropdownText = getByText("DATE");
    fireEvent.click(dropdownText);
    await waitFor(() => {
        expect(getByText("Sun")).toBeInTheDocument()
    });
})

it("changes date on click", async () => {
    const setDate = jest.fn()
    const providerProps = {
        itemNumber: 50,
        setItemNumber: jest.fn(),
        date: new Date(),
        setDate: setDate,
        articles: [],
        setArticles: jest.fn(),
        country: "US",
        setCountry: jest.fn(),
        error: "",
        setError: jest.fn()
      }
    const { getByText, getByLabelText } = render(
        <TableContext.Provider value={providerProps}>
            <DatePicker/>
        </TableContext.Provider>
    );
    const dropdownText = getByText("DATE");
    fireEvent.click(dropdownText);
    await waitFor(() => {
        expect(getByText("Sun")).toBeInTheDocument()
    });
    const lastMonthButton = getByLabelText("Last month");
    fireEvent.click(lastMonthButton);
    const currentDay = new Date();
    const dayButtonText = currentDay.getDate() === 3 ? "2" : "3";
    const dayButton = getByText(dayButtonText);
    fireEvent.click(dayButton);
    await waitFor(() => {
        expect(setDate).toBeCalled();
    });
})