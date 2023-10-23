import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import ResultCard from "../../components/ResultCard";
import "@testing-library/jest-dom";

it("render card normally based on props", () => {
    const { getByText } = render(<ResultCard rank="1" name="jest" views="0"/>);
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("jest")).toBeInTheDocument();
    expect(getByText("0 views")).toBeInTheDocument();
})
//renders normally