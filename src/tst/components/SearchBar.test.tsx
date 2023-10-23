import SearchBar from "../../components/SearchBar";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import '@testing-library/jest-dom'
import React, { createContext } from 'react';


jest.mock("../../components/DatePicker", () => ({
    __esModule: true,
    default: () => {return <div>Date</div>}
}));

jest.mock("../../components/ResultPicker", () => ({
    __esModule: true,
    default: () => {return <div>Number</div>}
}));

jest.mock("../../components/CountryPicker", () => ({
    __esModule: true,
    default: () => {return <div>Country</div>}
}));


jest.mock("../../hooks/useGetMostViewed", () => ({
    __esModule: true,
    default: jest.fn(() => {return {data: [], loading: false, error: ""}})
}
));

it("render search parameter components", () => {
    const { getByText } = render(<SearchBar/>);
    expect(getByText("Date")).toBeInTheDocument();
    expect(getByText("Number")).toBeInTheDocument();
    expect(getByText("Country")).toBeInTheDocument();
});

it("render search button", () => {
    const { getByText } = render(<SearchBar/>);
    expect(getByText("Search")).toBeInTheDocument();
})