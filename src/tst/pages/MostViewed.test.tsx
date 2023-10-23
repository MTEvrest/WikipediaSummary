import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import MostViewed from "../../pages/MostViewed";
import "@testing-library/jest-dom";
import { TableContext } from "../../App";

jest.mock("../../components/SearchBar", () => ({
    __esModule: true,
    default: () => {return <div>Search</div>}
}));

jest.mock("../../components/ResultCard", () => ({
    __esModule: true,
    default: () => {return <div>Number</div>}
}));

const emptyArray = Array(11).fill(0);
const articles = emptyArray.map((item, index) => {return {article: "Test", rank: index, views_ceil: 0}});

it("render normal render", () => {
    const { getByText } = render(<MostViewed/>);
    expect(getByText("Top Wikipedia articles")).toBeInTheDocument();
})

it("render search bar to be rendereed", () => {
    const { getByText } = render(<MostViewed/>);
    expect(getByText("Search")).toBeInTheDocument();
})

it("render error when provided", () => {
    const providerProps = {
        itemNumber: 50,
        setItemNumber: jest.fn(),
        date: new Date(),
        setDate: jest.fn(),
        articles: [],
        setArticles: jest.fn(),
        country: "US",
        setCountry: jest.fn(),
        error: "Error",
        setError: jest.fn()
    }
    const { getByText } = render(
        <TableContext.Provider value={providerProps}>
            <MostViewed/>
        </TableContext.Provider>
    );
    expect(getByText("Error")).toBeInTheDocument();
})

it("render error when provided", () => {
    const providerProps = {
        itemNumber: 50,
        setItemNumber: jest.fn(),
        date: new Date(),
        setDate: jest.fn(),
        articles: [],
        setArticles: jest.fn(),
        country: "US",
        setCountry: jest.fn(),
        error: "Error",
        setError: jest.fn()
    }
    const { getByText } = render(
        <TableContext.Provider value={providerProps}>
            <MostViewed/>
        </TableContext.Provider>
    );
    expect(getByText("Error")).toBeInTheDocument();
});

it("render 10 cards in table", () => {
    const providerProps = {
        itemNumber: 50,
        setItemNumber: jest.fn(),
        date: new Date(),
        setDate: jest.fn(),
        articles: articles,
        setArticles: jest.fn(),
        country: "US",
        setCountry: jest.fn(),
        error: "",
        setError: jest.fn()
    }
    const { getAllByText } = render(
        <TableContext.Provider value={providerProps}>
            <MostViewed/>
        </TableContext.Provider>
    );
    expect(getAllByText("Number")).toHaveLength(10);
});
